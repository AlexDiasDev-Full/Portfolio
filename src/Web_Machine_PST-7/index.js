const steps = [
    { id: '01', title: 'Iniciar Tambores', detail: 'MALHA CHEIA posição inicial N1 <br> ', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!-- Aqui entra espaçamento para alinha a linha  -------------->'], patternTrazeiraCar: 'A.......', patternTrazeiraList: '...A', patternDianteiraCar: 'AA......', },
    { id: '02', title: 'Separação Técnica', detail: 'MEIA MALHA - Preparação das agulhas para malha cheia.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!------------------------------------------->'], patternTrazeiraCar: 'A.......', patternTrazeiraList: '...A', patternDianteiraCar: 'AA...A..', },
    { id: '03', title: 'Separação Técnica', detail: 'FECHANDO MEIA MALHA - .', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!-- Aqui entra espaçamento para alinha a linha  -------------------------->'], patternTrazeiraCar: 'A.......', patternTrazeiraList: '...A', patternDianteiraCar: 'AA......', },
    { id: '04', title: 'Separação Técnica', detail: 'SEPARAÇÃO - Descaraga de malha.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2 ', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!---------------------------------------------------------------->'], patternTrazeiraCar: 'A.......', patternTrazeiraList: '...A', patternDianteiraCar: 'AA...AA.', },
    { id: '05', title: 'Início de Barra 1x1', detail: 'INICIO BARRA 1X1 - Carga de malha na barra 1x1.', tags: ['Ponto Esquedo Trazeiro:15', 'Ponto Direito Trazeiro: 15', 'Ponto Esquedo Dianteiro:13', 'Ponto Direito Dianteiro:15<!---------------------------------------------------------------->'], patternTrazeiraCar: 'AB...B..', patternTrazeiraList: '..A.', patternDianteiraCar: 'A....A..', },
    { id: '06', title: 'Tubular Barra 1x1', detail: 'BARRA 1X1 - Lançamento do fio base (Abóbora).', tags: ['Ponto Esquedo Trazeiro:14', 'Ponto Direito Trazeiro: 14', 'Ponto Esquedo Dianteiro:13', 'Ponto Direito Dianteiro:14 <!------------------------------------------------------------------->'], patternTrazeiraCar: 'AA...B..', patternTrazeiraList: '..A.', patternDianteiraCar: 'A....A..', },
    { id: '07', title: 'BARRA 1X1', detail: 'Ajustar altura da BARRA <br> ', tags: ['Ponto Esquedo Trazeiro:13', 'Ponto Direito Trazeiro: 13', 'Ponto Esquedo Dianteiro:13', 'Ponto Direito Dianteiro:13 <!------------------------------------------------------------------------------------------->'], patternTrazeiraCar: 'AB...B..', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '08', title: 'Tubular Transição', detail: 'Fechamento de transição p/fang.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!----------------------------------------------------------------->'], patternTrazeiraCar: 'AA......', patternTrazeiraList: '..A.', patternDianteiraCar: 'A....A..', },
    { id: '09', title: 'Trabalhado Fang', detail: 'Início da textura Fang entrelaçada.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!--------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '10', title: 'Trabalhado Fang', detail: 'Continuação da trama estrutural.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!------------------------------------------------------------------>'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '11', title: 'Trabalhado Fang', detail: 'Manutenção de velocidade constante.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!--------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '12', title: 'Trabalhado Fang', detail: 'Verificação de pontos falhos.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!--------------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '13', title: 'Trabalhado Fang', detail: 'Início da transição de cor.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!----------------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '14', title: 'Trabalhado Fang', detail: 'Integração de fio Branco.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!------------------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '15', title: 'Trabalhado Fang', detail: 'Ajustar 1ª altura do FUNDO.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!----------------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '..A.', patternDianteiraCar: 'A.......', },
    { id: '16', title: 'Trabalhado Fang', detail: 'Ajustar altura da LISTA e conclusão.', tags: ['Ponto Esquedo Trazeiro:16 1/2', 'Ponto Direito Trazeiro: 16 1/2', 'Ponto Esquedo Dianteiro:16 1/2', 'Ponto Direito Dianteiro:16 1/2 <!-------------------------------------------------------------->'], patternTrazeiraCar: 'A.B.....', patternTrazeiraList: '.A..', patternDianteiraCar: 'A.......', },
    {
        id: 'PC',
        title: 'CPU PROGRAMA',
        tags: [],
        detail: `
            <div style="font-family: 'Orbitron', monospace; font-size: 0.75rem; text-align: left; width: 100%;">
                <div style="text-align: center; margin-bottom: 15px; color: var(--text-dim);">Tambores Carro iniciar posição N1</div>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 1</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> A2 </td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> A2 </td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> B</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 6 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 2</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P7 </td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> P7 </td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 17</td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 3</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> A8 </td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> A8 </td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 8 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 4</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P15</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> P15</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 5 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 5</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> A16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> A16</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 1 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 6</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 10</td></tr>
                    
                    <tr><td colspan="5" style="background: rgba(255, 107, 0, 0.1); color: var(--primary); text-align: center; padding: 6px; font-weight: bold; margin-top: 10px;">Inicio Ciclo1</td></tr>
                    
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 7 </td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> R15</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 1 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 8 </td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> P15</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 10</td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 9 </td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> A16</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 1 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 10</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 10</td></tr>
                    
                    <tr><td colspan="5" style="background: rgba(255, 107, 0, 0.1); color: var(--primary); text-align: center; padding: 6px; font-weight: bold; margin-bottom: 10px;">Final Ciclo1</td></tr>
                    
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 11</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> R15</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 1 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 12</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span> P16</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> P15</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 10</td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 13</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span>  A1</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span> A16</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 1 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 14</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span>  P1</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span>  A1</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> A</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> 1 </td></tr>
                    <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 4px;">L 15</td><td style="padding: 4px;"><span style="color: var(--primary);">TB</span>  P1</td><td style="padding: 4px;"><span style="color: var(--primary);">FIO</span>  P1</td><td style="padding: 4px;"><span style="color: var(--primary);">VEL</span> B</td><td style="padding: 4px;"><span style="color: var(--primary);">X</span> F2</td></tr>
                    </table>
                
                <div style="margin-top: 20px; padding: 10px; background: #252528; border-radius: 4px; border: 1px dashed var(--border); text-align: center;">
                    <strong style="color: var(--primary);">Multiplicador de Ciclos:</strong><br>
                    Ciclo1 = 7 à 10 X 5
                </div>
            </div>
        `
    },
    {
        id: 'IMG',
        title: 'Amostra do Modelo',
        tags: ['Finalização', 'Visualização'],
        detail: `
            <div style="text-align: center; padding: 15px 0;">  <!-- Aqui entra a lógica da imagem -->
                <img src="assets/img/IMG-20260513-WA0001 - Copia.jpg" alt="Amostra do Modelo PST-7" 
                     style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border); 
                            box-shadow: 0 10px 30px rgba(0,0,0,0.4); transition: transform 0.3s ease;">
            </div>
            <p style="text-align: center; color: var(--text-dim); margin-top: 10px;">
                Representação real da malha produzida com a configuração de 2 cores (Abóbora & Branco).
            </p>
        `
    }
];

function createStepCards() {
    const grid = document.getElementById('techGrid');

    steps.forEach((step, index) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        const tagsTrazeiras = step.tags.filter(tag => !tag.toLowerCase().includes('dianteiro')).map(tag => `<span class="step-tag">${tag}</span>`).join('');
        const tagsDianteiras = step.tags.filter(tag => tag.toLowerCase().includes('dianteiro')).map(tag => `<span class="step-tag">${tag}</span>`).join('');

        const createNeedles = (pattern) => {
            return (pattern || '').split('').map(char => {
                let stateClass = '';
                let content = '';
                if (char === 'A') { stateClass = 'active-a'; content = 'A'; }
                if (char === 'B') { stateClass = 'active-b'; content = 'B'; }
                return `<div class="needle ${stateClass}">${content}</div>`;
            }).join('');
        };

        const needlesTrazeiraCar = createNeedles(step.patternTrazeiraCar || step.pattern);
        const needlesTrazeiraList = createNeedles(step.patternTrazeiraList || step.pattern);
        const needlesDianteiraCar = createNeedles(step.patternDianteiraCar || step.pattern);
        const needlesDianteiraList = createNeedles(step.patternDianteiraList || step.pattern);

        let cardHtml = `
            <span class="step-num">${step.id}</span>

            <h3>${step.title}</h3>

            <p class="step-detail">${step.detail}</p>
        `;

        if (step.id !== 'PC' && step.id !== 'IMG') {
            cardHtml += `
            <div class="needle-graphic">
                <div class="tags-container" style="margin-bottom: 15px;"> <!-- Ponto técnico trazeiro -->
                    ${tagsTrazeiras}
                </div>

                <div class="needle-grid"> <!-- Parafusos -->
                    ${needlesTrazeiraCar} <span class="needle-label">Carro Trazeiro</span>
                </div>
                <span class="graphic-label">Padrão de parafusos Trazeiro </span>

                <div class="needle-grid" style="display: block; padding-top: 10px;">
                    <div style="display: flex; gap: 4px; margin-bottom: 5px;">
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">T</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">C</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">F</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">A</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">F</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">C</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">A</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">Z</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 4px;">
                        ${needlesDianteiraCar} <span class="needle-label">Carro Dianteiro</span>
                    </div>
                </div>
                <span class="graphic-label">Padrão de parafusos Dianteira </span>
                <div class="tags-container"> <!-- Ponto técnico dianteiro -->
                    ${tagsDianteiras}
                </div>
            </div>

            <div class="needle-graphic" style="margin-top: 15px;">
                <div class="needle-grid" style="display: block; padding-top: 10px;">
                    <div style="display: flex; gap: 4px; margin-bottom: 5px;">
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">4</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">3</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">2</span>
                        <span style="display: inline-block; width: 14px; text-align: center; font-size: 0.6rem; color: var(--primary); font-family: 'Orbitron'; font-weight: bold;">1</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 4px;">
                        ${needlesTrazeiraList} <span class="needle-label">Listador</span>
                    </div>
                </div>
            </div>
            `;
        }

        card.innerHTML = cardHtml;

        grid.appendChild(card);

        // Animação de entrada escalonada
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Iniciar quando o DOM carregar
document.addEventListener('DOMContentLoaded', createStepCards);
