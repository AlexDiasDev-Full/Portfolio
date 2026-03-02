let carrinho = [];

// Adicionar ao Carrinho
function adicionarAoCarrinho(nome, precoStr) {
    // Converte "R$ 50,00" para o número 50.00
    const preco = parseFloat(precoStr.replace(/[^\d,]/g, '').replace(',', '.'));
    
    carrinho.push({ nome, preco, precoExibicao: precoStr });
    atualizarInterfaceCarrinho();
    alert(`${nome} adicionado ao orçamento!`);
}

function atualizarInterfaceCarrinho() {
    const lista = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-value');
    const countEl = document.getElementById('cart-count');
    
    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;
        lista.innerHTML += `
            <div class="cart__item">
                <span>${item.nome}</span>
                <span>${item.precoExibicao} <i class="ri-delete-bin-line" onclick="removerDoCarrinho(${index})"></i></span>
            </div>
        `;
    });

    totalEl.innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    countEl.innerText = carrinho.length;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarInterfaceCarrinho();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// FORMATAR E ENVIAR WHATSAPP
function enviarCarrinhoWhatsapp() {
    if (carrinho.length === 0) return alert("Seu carrinho está vazio!");

    let total = 0;
    let resumoItens = "";

    carrinho.forEach(item => {
        resumoItens += `• ${item.nome} - ${item.precoExibicao}\n`;
        total += item.preco;
    });

    const totalFormatado = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    
    const mensagem = encodeURIComponent(
        `🏗️ *PEDIDO DE ORÇAMENTO - NOSSA OBRA*\n\n` +
        `Gostaria de solicitar os seguintes itens:\n\n` +
        `${resumoItens}\n` +
        `💰 *VALOR TOTAL ESTIMADO:* ${totalFormatado}\n\n` +
        `Aguardo retorno sobre a disponibilidade.`
    );

    window.open(`https://api.whatsapp.com/send?phone=5535997324856&text=${mensagem}`);
}

// Para evitar que o fundo da página role enquanto o usuário está navegando dentro do carrinho

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const isOpening = modal.style.display !== 'flex';
    
    modal.style.display = isOpening ? 'flex' : 'none';
    
    // Trava o scroll da página de fundo quando o modal abre
    document.body.style.overflow = isOpening ? 'hidden' : 'auto';
}
