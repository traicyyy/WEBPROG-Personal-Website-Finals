<template>
  <section id="gallery" class="hero hero-services" style="background-image: url('/gallery.png');">
        <div class="overlay"></div>
        <div class="content">
            <h1 class="hero-title">GALLERY</h1>
            <section class="slider-container">
                <button class="prev">&lt;</button>
                <div class="slider">
                    <div class="slide"><img src="/pic1.png" alt="Image 1"></div>
                    <div class="slide"><img src="/pic2.png" alt="Image 2"></div>
                    <div class="slide"><img src="/pic3.png" alt="Image 3"></div>
                    <div class="slide"><img src="/pic4.png" alt="Image 4"></div>
                    <div class="slide"><img src="/pic5.png" alt="Image 5"></div>
                    <div class="slide"><img src="/pic6.png" alt="Image 6"></div>
                </div>
                <button class="next">&gt;</button>
                <div class="dots-container"></div>
            </section>            
        </div>
    </section>
</template>



<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    let slideIndex = ref(0);
    let autoScroll;
    let slider, slides, prevButton, nextButton, dotsContainer, dots;

    function updateSlider() {
      if (!slides || slides.length === 0 || !dots) return; // 
      slider.style.transform = `translateX(${-slideIndex.value * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[slideIndex.value].classList.add("active");
    }

    function moveSlide(step) {
      if (!slides || slides.length === 0) return; 
      slideIndex.value = (slideIndex.value + step + slides.length) % slides.length;
      updateSlider();
      resetAutoScroll();
    }

    function jumpToSlide(index) {
      if (!slides || slides.length === 0) return; 
      slideIndex.value = index;
      updateSlider();
      resetAutoScroll();
    }

    function autoSlide() {
      moveSlide(1);
    }

    function resetAutoScroll() {
      if (!slides || slides.length === 0) return; 
      clearInterval(autoScroll);
      autoScroll = setInterval(autoSlide, 3000);
    }


    onMounted(() => {
      slider = document.querySelector(".slider");
      slides = document.querySelectorAll(".slide");
      prevButton = document.querySelector(".prev");
      nextButton = document.querySelector(".next");
      dotsContainer = document.querySelector(".dots-container");

      if (!slider || slides.length === 0 || !prevButton || !nextButton || !dotsContainer) {
        console.error("Slider elements not found!");
        return; // Prevent further execution
      }

      slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => jumpToSlide(index));
        dotsContainer.appendChild(dot);
      });

      dots = document.querySelectorAll(".dot");

      prevButton.addEventListener("click", () => moveSlide(-1));
      nextButton.addEventListener("click", () => moveSlide(1));

      const sliderContainer = document.querySelector(".slider-container");
      if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", () => clearInterval(autoScroll));
        sliderContainer.addEventListener("mouseleave", resetAutoScroll);
      }

      // ✅ Only start if slides exist
      if (slides.length > 0) {
        updateSlider();
        resetAutoScroll();
      }
    });

    return { slideIndex };
  }
};
</script>


<style scoped>
#gallery {
    text-align: center;
    padding: 12px;
    margin: 0;
    background-attachment: fixed;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 9%);
}

.content {
    position: relative;
    z-index: 1;
}

.hero-title {
    font-family: 'Press Start 2P', cursive;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    margin: 90px;
    margin-bottom: 8px;
}

.hero {
    position: relative;
    height: 80vh; 
    max-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;  
}

.hero-services, .hero-gallery {
    position: relative;
    height: 85vh;
    max-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: center;
}

.slider-container {
    position: relative;
    width: 85%;
    max-width: 800px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: auto;
    margin-bottom: 5vh;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}

.slide {
    flex: 0 0 100%;
    text-align: center;
}

.slide img {
    width: 100%;
    height: 62vh;
}

/* Navigation Buttons */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 50%;
    z-index: 10;
}

/* Left Button Fix */
.prev {
    left: 1rem;
}

/* Right Button */
.next {
    right: 1rem;
}

/* Hover Effect */
.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .prev, .next {
        font-size: 1.2rem;
        padding: 0.8rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 1.5rem;
    }

    .prev, .next {
        font-size: 1rem;
        padding: 0.5rem;
    }
}
</style>
