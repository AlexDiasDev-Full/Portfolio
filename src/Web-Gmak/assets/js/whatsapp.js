document.addEventListener("DOMContentLoaded", function() {
    const telefone = "5535997324856"; // Seu número
    const linksWhatsapp = document.querySelectorAll('.whatsapp-link');

    linksWhatsapp.forEach(link => {
        const nomeProduto = link.getAttribute('data-produto');
        const mensagem = encodeURIComponent(`Olá, venho do Site da Gmak, tenho interesse em ${nomeProduto}.`);
        
        // Define o link final
        link.href = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`;
        link.target = "_blank";
    });
});
