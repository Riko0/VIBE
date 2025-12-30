// Initialize Swiper carousel with modern defaults
const swiper = new Swiper(".mySwiper", {
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Dots pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Infinite loop
    loop: true,
    // Keyboard control
    keyboard: {
        enabled: true,
    },
    // Responsive behavior
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
});

// BibTeX Copy to Clipboard functionality
const copyBtn = document.getElementById('copy-btn');
const bibtexContent = document.getElementById('bibtex-content');

if (copyBtn && bibtexContent) {
    copyBtn.addEventListener('click', () => {
        const text = bibtexContent.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            copyBtn.classList.add('bg-green-600');
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.classList.remove('bg-green-600');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
}

