document.addEventListener("DOMContentLoaded", function() {
    const cardsPerPage = 12; // Defina quantos itens quer por pagina
    const wrapper = document.getElementById("projects-wrapper");
    const allCards = Array.from(wrapper.getElementsByClassName("projects__card"));
    const paginationContainer = document.getElementById("pagination");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter__btn");

    let filteredCards = [...allCards];

    function updateDisplay(page = 1) {
        // Esconder todos os cards primeiro
        allCards.forEach(card => card.classList.add("hide"));

        // Calcular exibição do set filtrado
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;
        const cardsToShow = filteredCards.slice(start, end);

        cardsToShow.forEach(card => card.classList.remove("hide"));

        renderPagination(page);
    }

    function renderPagination(currentPage) {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.innerText = i;
            btn.className = `pagination__button ${i === currentPage ? 'active' : ''}`;
            btn.onclick = () => {
                updateDisplay(i);
                document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
            };
            paginationContainer.appendChild(btn);
        }
    }

    // Lógica de Busca e Filtro
    function filterItems() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector(".filter__btn.active").dataset.filter;

        filteredCards = allCards.filter(card => {
            const title = card.querySelector(".projects__title").innerText.toLowerCase();
            const category = card.dataset.category;
            
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = activeCategory === "todos" || category === activeCategory;

            return matchesSearch && matchesCategory;
        });

        updateDisplay(1);
    }

    // Eventos
    searchInput.addEventListener("input", filterItems);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterItems();
        });
    });

    // Iniciar
    updateDisplay(1);
});
