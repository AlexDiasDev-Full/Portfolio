const voiceBtn = document.getElementById('voice-search-btn');
const searchInput = document.getElementById('search-input');

// 1. Função para Gerar Som
function playBeep(frequency = 600, duration = 0.1) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
}

function playErrorSound() {
    playBeep(300, 0.2);
    setTimeout(() => playBeep(200, 0.3), 150);
}

// 2. Configuração do Reconhecimento de Voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = true;      // Mantém gravação ativa sem parar
    recognition.interimResults = true;  // Mostra transcrição parcial em tempo real

    let isRecording = false;
    let fullTranscript = ''; // Acumula todo o texto da sessão

    // Clique no botão: inicia ou encerra a gravação
    voiceBtn.addEventListener('click', () => {
        if (isRecording) {
            // Segundo clique: para a gravação
            recognition.stop();
            return;
        }

        fullTranscript = ''; // Limpa transcrição anterior
        playBeep(800, 0.15);
        setTimeout(() => {
            recognition.start();
            isRecording = true;
            voiceBtn.classList.add('recording');
            searchInput.placeholder = "Ouvindo... (clique para parar)";
            searchInput.value = "";
        }, 100);
    });

    // Exibe transcrição acumulada no input em tempo real
    recognition.onresult = (event) => {
        let interimTranscript = '';

        // Percorre apenas os resultados novos desta chamada
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
                // Acumula os resultados finais com espaço
                fullTranscript += result[0].transcript + ' ';
            } else {
                interimTranscript += result[0].transcript;
            }
        }

        // Mostra: tudo que foi dito (final) + o que está sendo dito agora (parcial)
        const display = (fullTranscript + interimTranscript).toLowerCase().replace(/\.$/g, '').trim();
        searchInput.value = display;
        // Dispara o evento 'input' para que o paginacao.js reaja à mudança
        searchInput.dispatchEvent(new Event('input'));
    };

    recognition.onend = () => {
        voiceBtn.classList.remove('recording');
        searchInput.placeholder = "Buscar ferramentas (Ex.: Andaime...)";
        isRecording = false;
    };

    recognition.onerror = (event) => {
        console.error("Erro no reconhecimento:", event.error);
        playErrorSound();
        voiceBtn.classList.remove('recording');
        searchInput.placeholder = "Erro. Tente novamente.";
        isRecording = false;
    };

} else {
    // Navegador não suporta reconhecimento de voz
    voiceBtn.style.display = "none";
}

// Função para limpar a busca (usada pelo botão "Ver todos", se existir)
function limparBusca() {
    const input = document.getElementById('search-input');
    input.value = "";
    // Dispara o evento 'input' para que o paginacao.js reaja
    input.dispatchEvent(new Event('input'));
}
