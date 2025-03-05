<template>
  <section id="gallery" class="hero hero-services">
        <div class="overlay"></div>
        <div class="content">
            <h1 class="hero-title">OUR WORKS</h1>
            <section class="slider-container">
                <button class="prev">&lt;</button>
                <div class="slider">
                    <div class="slide"><img src="images/g_dc.png" alt="Image 1"></div>
                    <div class="slide"><img src="images/g_sr.png" alt="Image 2"></div>
                    <div class="slide"><img src="images/g_ss.png" alt="Image 3"></div>
                    <div class="slide"><img src="images/g_su.png" alt="Image 4"></div>
                    <div class="slide"><img src="images/g_sv.png" alt="Image 5"></div>
                </div>
                <button class="next">&gt;</button>
                <div class="dots-container"></div>
            </section>            
        </div>
    </section>
</template>


<script>
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots-container");
let slideIndex = 0;
let autoScroll;

if (slider && slides.length > 0 && prevButton && nextButton && dotsContainer) {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => jumpToSlide(index));
        dotsContainer.appendChild(dot);
      });
    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function moveSlide(step) {
        slideIndex = (slideIndex + step + slides.length) % slides.length;
        updateSlider();
        resetAutoScroll();
    }

    function jumpToSlide(index) {
        slideIndex = index;
        updateSlider();
        resetAutoScroll();
    }

    function autoSlide() {
        moveSlide(1);
    }

    function resetAutoScroll() {
        clearInterval(autoScroll);
        autoScroll = setInterval(autoSlide, 3000);
    }

    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));

    const sliderContainer = document.querySelector(".slider-container");
    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", () => clearInterval(autoScroll));
        sliderContainer.addEventListener("mouseleave", resetAutoScroll);
    }

    // Initialize slider
    updateSlider();
    autoScroll = setInterval(autoSlide, 3000);
  }
</script>


<style scoped>
#gallery {
    text-align: center;
    padding: 70px;
}

.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;  
}

.slider-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: auto;
    margin-bottom: 100px;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 50%;
}

.slide {
    flex: 0 0 100%;
    text-align: center;
}

.slide img {
    width: 100%;
    height: auto;
}

/* Navigation Buttons */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 24px;
    border-radius: 50%;
    z-index: 10;
}

/* Left Button Fix */
.prev {
    left: 5px;
}

/* Right Button */
.next {
    right: 5px;
}

/* Hover Effect */
.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
</style>