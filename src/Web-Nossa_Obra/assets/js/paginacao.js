document.addEventListener("DOMContentLoaded", function() {
    const cardsPerPage = 3; // Defina quantos itens quer por página
    const wrapper = document.getElementById("projects-wrapper");
    const cards = Array.from(wrapper.getElementsByClassName("projects__card"));
    const paginationContainer = document.getElementById("pagination");
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    function showPage(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });

        // Atualiza a classe ativa nos botões
        const buttons = paginationContainer.querySelectorAll(".pagination__button");
        buttons.forEach((btn, index) => {
            if (index + 1 === page) btn.classList.add("active");
            else btn.classList.remove("active");
        });

        // Rola suavemente para o topo da seção ao mudar de página
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
    }

    function createPagination() {
        paginationContainer.innerHTML = ""; // Limpa se houver algo

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.innerText = i;
            btn.classList.add("pagination__button");
            btn.addEventListener("click", () => showPage(i));
            paginationContainer.appendChild(btn);
        }
    }

    if (cards.length > cardsPerPage) {
        createPagination();
        showPage(1); // Inicia na página 1
    }
});
