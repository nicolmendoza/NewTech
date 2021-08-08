document.querySelector('.menu-btn').addEventListener('click', () => {
document.querySelector('.lista').classList.toggle('show');
});

ScrollReveal().reveal('.principal');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.banner-section',{delay:500});

