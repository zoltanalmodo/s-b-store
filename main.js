// MasterCraft Stretcher Bars - Main JavaScript

// Global variables
let selectedProduct = 'keyable';
let currentPrice = 45.00;
let orderCart = [];

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeTypedText();
    initializeCarousel();
    initializeScrollEffects();
    initializeCounters();
    updatePrice();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
});

// Initialize animations
function initializeAnimations() {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuart',
                    delay: anime.stagger(100)
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));
}

// Initialize typed text effect
function initializeTypedText() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: [
                'Precision Craftsmanship',
                'Gallery-Quality Frames',
                'Professional Stretcher Bars',
                'Exhibition-Ready Solutions'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Initialize carousel
function initializeCarousel() {
    const carousel = document.getElementById('gallery-carousel');
    if (carousel) {
        new Splide('#gallery-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                }
            }
        }).mount();
    }
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize counter animations
function initializeCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Animate counter numbers
function animateCounter(element, target) {
    anime({
        targets: { count: 0 },
        count: target,
        duration: 2000,
        easing: 'easeOutQuart',
        update: function(anim) {
            element.textContent = Math.floor(anim.animatables[0].target.count);
        }
    });
}

// Product selection
function selectProduct(productType) {
    selectedProduct = productType;
    
    // Update visual selection
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('border-yellow-500', 'bg-yellow-50');
    });
    
    event.currentTarget.classList.add('border-yellow-500', 'bg-yellow-50');
    
    // Update preview
    updateProductPreview();
    updatePrice();
}

// Update product preview
function updateProductPreview() {
    const previewTitle = document.getElementById('preview-title');
    const previewDescription = document.getElementById('preview-description');
    const profileInfo = document.getElementById('profile-info');
    const depthInfo = document.getElementById('depth-info');
    
    const productData = {
        keyable: {
            title: 'Keyable Stretcher Bars',
            description: 'Adjustable tension system with corner keys for canvas tightening',
            profile: '44×44mm',
            depth: '1.75"'
        },
        fixed: {
            title: 'Fixed Stretcher Bars',
            description: 'Traditional fixed-frame construction with precision joints',
            profile: '38×38mm',
            depth: '1.5"'
        },
        exhibition: {
            title: 'Exhibition Frames',
            description: 'Gallery-ready presentation frames with professional finish',
            profile: 'Custom Profile',
            depth: 'Variable'
        }
    };
    
    const data = productData[selectedProduct];
    if (data) {
        previewTitle.textContent = data.title;
        previewDescription.textContent = data.description;
        profileInfo.textContent = data.profile;
        depthInfo.textContent = data.depth;
    }
}

// Update pricing
function updatePrice() {
    const woodType = document.querySelector('input[name="woodType"]:checked')?.value || 'pine';
    const width = parseInt(document.getElementById('width')?.value) || 24;
    const height = parseInt(document.getElementById('height')?.value) || 36;
    const quantity = parseInt(document.getElementById('quantity')?.value) || 1;
    
    // Base prices
    const basePrices = {
        keyable: 45,
        fixed: 32,
        exhibition: 68
    };
    
    // Wood type upgrades
    const woodUpgrades = {
        pine: 0,
        oak: 25,
        poplar: 15
    };
    
    // Size multiplier (larger sizes cost more)
    const sizeMultiplier = 1 + ((width * height) / 1000) * 0.1;
    
    // Calculate prices
    const basePrice = basePrices[selectedProduct] * sizeMultiplier;
    const woodUpgrade = woodUpgrades[woodType];
    const unitPrice = basePrice + woodUpgrade;
    const subtotal = unitPrice * quantity;
    
    // Update display
    document.getElementById('total-price').textContent = subtotal.toFixed(2);
    document.getElementById('base-price').textContent = `$${basePrice.toFixed(2)}`;
    document.getElementById('wood-upgrade').textContent = woodUpgrade > 0 ? `$${woodUpgrade.toFixed(2)}` : '$0.00';
    document.getElementById('quantity-display').textContent = quantity;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    
    currentPrice = subtotal;
}

// Add to cart functionality
function addToCart() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const woodType = document.querySelector('input[name="woodType"]:checked').value;
    
    const productData = {
        id: Date.now(),
        type: selectedProduct,
        woodType: woodType,
        width: width,
        height: height,
        quantity: quantity,
        price: currentPrice,
        timestamp: new Date().toISOString()
    };
    
    // Get existing cart or create new one
    let cart = JSON.parse(localStorage.getItem('mastercraftCart') || '[]');
    cart.push(productData);
    localStorage.setItem('mastercraftCart', JSON.stringify(cart));
    
    // Show success message
    showNotification('Product added to your order!', 'success');
    
    // Update cart counter if exists
    updateCartCounter();
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update cart counter
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('mastercraftCart') || '[]');
    const counter = document.getElementById('cart-counter');
    if (counter) {
        counter.textContent = cart.length;
        counter.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

// Scroll to configurator
function scrollToConfigurator() {
    const configurator = document.getElementById('configurator');
    if (configurator) {
        configurator.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    // Implementation for mobile menu
    console.log('Mobile menu toggled');
}

// Utility functions for other pages

// Get cart items
function getCartItems() {
    return JSON.parse(localStorage.getItem('mastercraftCart') || '[]');
}

// Clear cart
function clearCart() {
    localStorage.removeItem('mastercraftCart');
    updateCartCounter();
}

// Remove item from cart
function removeFromCart(itemId) {
    let cart = getCartItems();
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('mastercraftCart', JSON.stringify(cart));
    updateCartCounter();
}

// Calculate total price of cart
function getCartTotal() {
    const cart = getCartItems();
    return cart.reduce((total, item) => total + item.price, 0);
}

// Format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Get product display name
function getProductDisplayName(type) {
    const names = {
        keyable: 'Keyable Stretcher Bars',
        fixed: 'Fixed Stretcher Bars',
        exhibition: 'Exhibition Frames'
    };
    return names[type] || 'Unknown Product';
}

// Get wood type display name
function getWoodTypeDisplayName(type) {
    const names = {
        pine: 'Premium Pine',
        oak: 'White Oak',
        poplar: 'Poplar'
    };
    return names[type] || 'Unknown Wood';
}

// Validate dimensions
function validateDimensions(width, height) {
    const errors = [];
    
    if (width < 8 || width > 72) {
        errors.push('Width must be between 8 and 72 inches');
    }
    
    if (height < 8 || height > 72) {
        errors.push('Height must be between 8 and 72 inches');
    }
    
    return errors;
}

// Show loading state
function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>';
        element.disabled = true;
    }
}

// Hide loading state
function hideLoading(element, originalText) {
    if (element) {
        element.textContent = originalText;
        element.disabled = false;
    }
}

// Debounce function for input handling
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize tooltips
function initializeTooltips() {
    // Add tooltip functionality for help icons
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

// Show tooltip
function showTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute z-50 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg';
    tooltip.textContent = event.target.dataset.tooltip;
    tooltip.style.top = event.target.offsetTop - 30 + 'px';
    tooltip.style.left = event.target.offsetLeft + 'px';
    tooltip.id = 'active-tooltip';
    
    event.target.parentNode.appendChild(tooltip);
}

// Hide tooltip
function hideTooltip() {
    const tooltip = document.getElementById('active-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Export functions for use in other files
window.MasterCraft = {
    selectProduct,
    updatePrice,
    addToCart,
    getCartItems,
    clearCart,
    removeFromCart,
    getCartTotal,
    formatPrice,
    getProductDisplayName,
    getWoodTypeDisplayName,
    validateDimensions,
    showNotification,
    showLoading,
    hideLoading,
    debounce
};