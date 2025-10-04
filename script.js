        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Testimonial Slider
        const track = document.getElementById('testimonialTrack');
        const dots = document.querySelectorAll('.slider-dot');
        let currentIndex = 0;
        
        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.getAttribute('data-index'));
                updateSlider();
            });
        });
        
        // Auto slide every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateSlider();
        }, 5000);

        // Form Submission
        const inquiryForm = document.getElementById('inquiryForm');
        
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you soon.');
            inquiryForm.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });