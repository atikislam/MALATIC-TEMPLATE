// Home Page Specific JavaScript

// Initialize Owl Carousel for products
document.addEventListener('DOMContentLoaded', function() {
    $('#productsCarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        },
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ]
    });

    // Initialize Owl Carousel for top client slider
    $('#topCarousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        slideBy: 1,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            576: {
                items: 3,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 4,
                nav: true
            }
        }
    });

    // Initialize Owl Carousel for bottom client slider
    $('#bottomCarousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        slideBy: 1,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            576: {
                items: 3,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 4,
                nav: true
            }
        }
    });

    // Counter Animation Function
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = `+ DE ${Math.floor(current)}`;
        }, 16);
    }

    // Intersection Observer for Counter Animation
    function initCounters() {
        const counterElements = document.querySelectorAll('.counter-number[data-count]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if (!counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter);
                    }
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of element is visible
        });

        counterElements.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Initialize counters when page loads
    initCounters();
});
