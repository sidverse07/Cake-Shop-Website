
const cakes = [
    {
        id: 1,
        name: "Chocolate Truffle",
        category: "Chocolate",
        price: 699,
        tag: "BESTSELLER",
        description: "Rich chocolate, smooth ganache.",
        image: "photo-1578985545062-69928b1d9587"
    },
    {
        id: 2,
        name: "Strawberry Dream",
        category: "Classic",
        price: 649,
        tag: "CUSTOMER FAVOURITE",
        description: "Soft sponge with fruity sweetness.",
        image: "photo-1565958011703-44f9829ba187"
    },
    {
        id: 3,
        name: "Celebration Cake",
        category: "Celebration",
        price: 899,
        tag: "MADE FOR MOMENTS",
        description: "A centrepiece for your celebrations.",
        image: "photo-1464349095431-e9a21285b5f3"
    },
    {
        id: 4,
        name: "Red Velvet",
        category: "Classic",
        price: 749,
        tag: "CLASSIC",
        description: "Velvety layers with creamy frosting.",
        image: "photo-1586788680434-30d324b2d46f"
    },
    {
        id: 5,
        name: "Dark Chocolate",
        category: "Chocolate",
        price: 799,
        tag: "CHOCOLATE LOVERS",
        description: "Deep cocoa flavour in every bite.",
        image: "photo-1606890737304-57a1ca8a5b62"
    },
    {
        id: 6,
        name: "Birthday Special",
        category: "Celebration",
        price: 999,
        tag: "CELEBRATE",
        description: "A joyful cake for a memorable day.",
        image: "photo-1558636508-e0db3814bd1d"
    }
];

let cart = [];

function renderCakes(category = "All") {
    const grid = document.getElementById("productGrid");

    const filteredCakes = category === "All"
        ? cakes
        : cakes.filter(cake => cake.category === category);

    grid.innerHTML = filteredCakes.map(cake => `
        <article class="product-card">
            <div class="product-photo">
                <img
                    src="https://images.unsplash.com/${cake.image}?auto=format&fit=crop&w=700&q=80"
                    alt="${cake.name}"
                    loading="lazy">
                <span class="product-tag">${cake.tag}</span>
            </div>
            <div class="product-info">
                <h3>${cake.name}</h3>
                <p class="product-description">${cake.description}</p>
                <div class="product-bottom">
                    <span class="product-price">₹${cake.price}</span>
                    <button class="add-button" onclick="addToCart(${cake.id})">
                        + ADD TO BAG
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

function addToCart(id) {
    const cake = cakes.find(item => item.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...cake, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartTotal").textContent = `₹${total}`;

    const cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your sweet bag is empty. Add a cake to begin!</p>";
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    ₹${item.price} × ${item.quantity}
                </div>
                <div>
                    <button onclick="changeQuantity(${item.id}, -1)">−</button>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join("");
    }

    const cakeSelect = document.getElementById("cakeType");
    const previousValue = cakeSelect.value;

    cakeSelect.innerHTML =
        '<option value="">Select a cake</option>' +
        cakes.map(cake =>
            `<option value="${cake.name}">${cake.name} — ₹${cake.price}</option>`
        ).join("");

    if (cakes.some(cake => cake.name === previousValue)) {
        cakeSelect.value = previousValue;
    }
}

function changeQuantity(id, change) {
    const item = cart.find(cake => cake.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(cake => cake.id !== id);
    }

    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function toggleCart() {
    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("cartOverlay");
    const shouldOpen = panel.hidden;

    panel.hidden = !shouldOpen;
    overlay.hidden = !shouldOpen;
    document.body.style.overflow = shouldOpen ? "hidden" : "";
}

function goToOrder() {
    if (cart.length === 0) {
        alert("Your sweet bag is empty. Please add a cake first.");
        return;
    }

    const cakeSelect = document.getElementById("cakeType");
    const cartNames = cart.map(item => item.name);

    if (cartNames.length === 1) {
        cakeSelect.value = cartNames[0];
    } else {
        cakeSelect.value = "";
    }

    toggleCart();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("cakeMessage").value =
        "Interested in: " + cart.map(
            item => `${item.name} x ${item.quantity}`
        ).join(", ");
}

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        renderCakes(button.dataset.category);
    });
});

document.getElementById("orderForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const cake = document.getElementById("cakeType").value;
    const size = document.getElementById("cakeSize").value;
    const date = document.getElementById("deliveryDate").value;
    const message = document.getElementById("cakeMessage").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("formMessage").textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }

    const orderDetails = {
        customer: name,
        phone: phone,
        cake: cake,
        size: size,
        deliveryDate: date,
        message: message
    };

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}! Your ${cake} enquiry has been prepared. ` +
        "This demo does not send or save orders to a server.";

    console.log("Demo enquiry:", orderDetails);
    event.target.reset();
});

const dateInput = document.getElementById("deliveryDate");
const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

renderCakes();
updateCart();

// Change 1: Add a dismissible announcement banner
(function () {
    const banner = document.createElement("div");
    banner.id = "cake-announcement";

    const message = document.createElement("span");
    message.textContent =
        "Freshly baked happiness! Explore our cakes and custom cake designs.";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.textContent = "\u00D7";
    closeButton.setAttribute("aria-label", "Close announcement");

    closeButton.addEventListener("click", function () {
        banner.remove();
    });

    banner.appendChild(message);
    banner.appendChild(closeButton);
    document.body.prepend(banner);
})();

/* Change 3: Back to Top Button */
(function () {
    const button = document.createElement("button");

    button.id = "back-to-top";
    button.type = "button";
    button.textContent = "\u2191";
    button.setAttribute("aria-label", "Back to top");
    button.title = "Back to top";

    document.body.appendChild(button);

    function updateButtonVisibility() {
        button.style.display = window.scrollY > 300 ? "block" : "none";
    }

    window.addEventListener("scroll", updateButtonVisibility);

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateButtonVisibility();
})();


/* Change 3: Dark Mode Toggle */
(function () {
    const button = document.createElement("button");

    button.id = "dark-mode-toggle";
    button.type = "button";
    button.textContent = "🌙 Dark Mode";
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-mode");

        button.textContent = isDark
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

        button.setAttribute("aria-pressed", String(isDark));
    });

    document.body.appendChild(button);
})();

