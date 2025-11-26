// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product data for products page
const products = [
    { id: 1, name: "Smartphone X", price: 699.99, category: "phone", image: "<https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Smartphone>" },
    { id: 2, name: "Ultra Laptop Pro", price: 1299.99, category: "laptop", image: "<https://via.placeholder.com/300x200/50E3C2/FFFFFF?text=Laptop>" },
    { id: 3, name: "Wireless Headphones", price: 199.99, category: "audio", image: "<https://via.placeholder.com/300x200/9013FE/FFFFFF?text=Headphones>" },
    { id: 4, name: "Smart Watch", price: 299.99, category: "wearable", image: "<https://via.placeholder.com/300x200/F5A623/FFFFFF?text=Smart+Watch>" },
    { id: 5, name: "Tablet Mini", price: 499.99, category: "tablet", image: "<https://via.placeholder.com/300x200/D0021B/FFFFFF?text=Tablet>" },
    { id: 6, name: "Gaming Console", price: 399.99, category: "gaming", image: "<https://via.placeholder.com/300x200/7ED321/FFFFFF?text=Console>" }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Cart modal functionality
    const cartLink = document.getElementById('cart-link');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close');

    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            showCartModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', hideCartModal);
    }

    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                hideCartModal();
            }
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Load products on products page
    if (window.location.pathname.includes('products.html')) {
        loadProducts();
        setupFilters();
    }
});
