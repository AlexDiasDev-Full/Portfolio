
    //Carrinho de compras
    const cartIcon = document.querySelector("#cart-icon");
    const cart = document.querySelector(".cart");
    const cartClose = document.querySelector("#cart-close");
    cartIcon.addEventListener("click", () => cart.classList.add("active"));
    cartClose.addEventListener("click", () => cart.classList.remove("active"));
    
    const addCartButtons = document.querySelectorAll(".add-cart");
    addCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productBox = event.target.closest(".item-product-box");
            addToCart(productBox);
        });
        
    });
    
    
    const cartContent =  document.querySelector(".cart-content");
    const addToCart = productBox => {
        const productImgSrc = productBox.querySelector("img").src;
        const productTitle = productBox.querySelector(".item-product-title").textContent;
        const productPrice = productBox.querySelector(".price").textContent;
    
        const cartItems = cartContent.querySelectorAll(".cart-item-product-title");
        for (let item of cartItems) {
            if (item.textContent === productTitle) {
                alert("Este artigo já está no carro!");
                return;
            }
        }
    
        const cartBox = document.createElement("div");
        cartBox.classList.add("cart-box");
        cartBox.innerHTML = `
                   
                    <img src="${productImgSrc}" class="cart-img">
                    <div class="cart-detail">
                        <h2 class="cart-item-product-title">${productTitle}</h2>
                        <span class="cart-price">${productPrice}</span>
                        <div class="cart-quantity">
                            <button id="decrement">-</button>
                            <span class="number">1</span>
                            <button id="increment">+</button>
                        </div>
                    </div>
                    <i class="ri-delete-bin-line cart-remove">🗑</i>
                   
        `;
    
        cartContent.appendChild(cartBox);
    
        cartBox.querySelector(".cart-remove").addEventListener("click", () => {
            cartBox.remove();
    
            updateCartCount(-1);
    
            updateTotalPrice();
        });
    
    
        
        cartBox.querySelector(".cart-quantity").addEventListener("click", Event => {
            const numberElement = cartBox.querySelector(".number");
            const decrementButton = cartBox.querySelector("#decrement");
            let quantity = numberElement.textContent;
    
            if (Event.target.id === "decrement" && quantity > 1) {
                quantity--;
                if (quantity === 1) {
                    decrementButton.style.color = "#999";
                }
            } else if (Event.target.id === "increment") {
                quantity++;
                decrementButton.style.color = "#333";
            }
    
            numberElement.textContent = quantity;
    
            updateTotalPrice();
        });
        updateCartCount(1);
      
        updateTotalPrice();
    };
    
    
    
    //soma valores de compras
    const updateTotalPrice = () => {
        const totalPriceElement = document.querySelector(".total-price");
        const cartBoxes = cartContent.querySelectorAll(".cart-box");
        let total = 0;
        cartBoxes.forEach(cartBox => {
            const priceElement = cartBox.querySelector(".cart-price");
            const quantityElement = cartBox.querySelector(".number");
            const price = priceElement.textContent.replace("$", "");
            const quantity = quantityElement.textContent;
            total += price * quantity;
        });
        //if price contain some cents
        total = Math.round(total * 100) / 100;
        totalPriceElement.textContent = `$${total}`;


     };
    
    
    
    let cartItemCount = 0;
    const updateCartCount = change => {
        const cartItemCountBadge = document.querySelector(".cart-item-count");
        cartItemCount += change;
        if (cartItemCount > 0) {
            cartItemCountBadge.style.visibility = "visible";
            cartItemCountBadge.textContent = cartItemCount;
        } else {
            cartItemCountBadge.style.visibility = "hidden";
            cartItemCountBadge.textContent = "";
        }
    };
    
    
    
    const buyNowButton = document.querySelector(".btn-buy");
    buyNowButton.addEventListener("click", () => {
        const cartBoxes = cartContent.querySelectorAll(".cart-box");
        if (cartBoxes.length === 0) {
            alert("Seu carro está vazio. Por favor acrescente artigos em seu carrinho antes de comprar.");
            return;
        }
    
        cartBoxes.forEach(cartBox => cartBox.remove());
    
        cartItemCount = 0;
        updateCartCount(0);
    
        updateTotalPrice();
    
        alert("Obrigado por sua compra!");
    
    });
    


/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

