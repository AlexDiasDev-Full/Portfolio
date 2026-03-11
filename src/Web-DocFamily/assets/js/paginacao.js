document.addEventListener("DOMContentLoaded", function() {
    const cardsPerPage = 6; 
    const wrapper = document.querySelector(".blog .grid-list");
    if (!wrapper) return;
    
    const allItems = Array.from(wrapper.querySelectorAll("li"));
    const paginationContainer = document.getElementById("pagination");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter__btn");

    let filteredItems = [...allItems];

    function updateDisplay(page = 1) {
        allItems.forEach(item => item.style.display = "none");

        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;
        const itemsToShow = filteredItems.slice(start, end);

        itemsToShow.forEach(item => item.style.display = "");

        renderPagination(page);
    }

    function renderPagination(currentPage) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(filteredItems.length / cardsPerPage);

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

    function filterItems() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
        const activeBtn = document.querySelector(".filter__btn.active");
        const activeCategory = activeBtn ? activeBtn.dataset.filter : "todos";

        filteredItems = allItems.filter(item => {
            const card = item.querySelector(".blog-card");
            if (!card) return false;
            
            const titleEl = card.querySelector(".card-title");
            const title = titleEl ? titleEl.innerText.toLowerCase() : "";
            const category = card.dataset.category;
            
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = activeCategory === "todos" || category === activeCategory;

            return matchesSearch && matchesCategory;
        });

        const noResults = document.getElementById("no-results");
        if(noResults) {
            if(filteredItems.length === 0) {
               noResults.style.display = "block";
               const span = noResults.querySelector("span");
               if(span) span.innerText = searchInput.value;
            } else {
               noResults.style.display = "none";
            }
        }

        updateDisplay(1);
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterItems);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterItems();
        });
    });

    updateDisplay(1);
});

window.limparBusca = function() {
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter__btn");
    
    if (searchInput) searchInput.value = "";
    filterBtns.forEach(b => b.classList.remove("active"));
    const btnTodos = document.querySelector('.filter__btn[data-filter="todos"]');
    if (btnTodos) btnTodos.classList.add("active");
    
    if (searchInput) {
        searchInput.dispatchEvent(new Event('input'));
    }
};
