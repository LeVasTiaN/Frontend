
const testimonials = [
    {
        img: "files/profile-picture.jpg",
        quote: "“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
        author: "Adam Aderson",
        role: "Head of business development @ Colorlib"
    },
    {
        img: "files/profile-picture.jpg",
        quote: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”",
        author: "Daniella Wood",
        role: "Founder @ Colorlib"
    },
    {
        img: "files/profile-picture.jpg",
        quote: "“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
        author: "John Doe",
        role: "Photographer @ Colorlib"
    }
];
let currentIndex = 0;
const slideContainer = document.querySelector('.testimonial-content');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot');
const slideImg = slideContainer.querySelector('img');
const slideQuote = slideContainer.querySelector('.quote-text');
const slideAuthor = slideContainer.querySelector('.author');
const slideRole = slideContainer.querySelector('.role');
function updateSlide(index, animationClass) {
    slideContainer.classList.remove('slide-in-left', 'slide-in-right');
    
    void slideContainer.offsetWidth; 
    const item = testimonials[index];
    slideImg.src = item.img;
    slideQuote.textContent = item.quote;
    slideAuthor.textContent = item.author;
    slideRole.textContent = item.role;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    slideContainer.classList.add(animationClass);
}
arrowRight.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    updateSlide(currentIndex, 'slide-in-right');
});
arrowLeft.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    updateSlide(currentIndex, 'slide-in-left');
});
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const direction = index > currentIndex ? 'slide-in-right' : 'slide-in-left';
        currentIndex = index;
        updateSlide(currentIndex, direction);
    });
});