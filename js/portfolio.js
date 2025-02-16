let currentSlide = 0;
const totalSlides = 1; // 페이지 수 (첫 페이지에서 2페이지로 넘어감)
const wrapper = document.querySelector('.portfoliobody');

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        // 아래로 스크롤 시
        if (currentSlide < totalSlides) {
            currentSlide++;
        }
    } else {
        // 위로 스크롤 시
        if (currentSlide > 0) {
            currentSlide--;
        }
    }

    // 페이지 변경
    wrapper.style.transform = `translateX(-${currentSlide * 100}vw)`;
});




