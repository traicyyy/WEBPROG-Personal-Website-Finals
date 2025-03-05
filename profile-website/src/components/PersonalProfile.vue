<template>
  <div>
    <header>
      <nav>
        <div class="menu-toggle" @click="toggleMenu">☰</div>
        <ul :class="{ 'open': menuOpen }">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#about" @click="closeMenu">About Me</a></li>
          <li><a href="#education" @click="closeMenu">Education</a></li>
          <li><a href="#gallery" @click="closeMenu">Gallery</a></li>
          <li><a href="#contact" @click="closeMenu">Contact Me</a></li>
        </ul>
      </nav>
    </header>


    <main>
      <!-- HOME Section-->
      <section id="home" class="home-section" style="background-image: url('/home.png');">
        <div class="home-container">
            <div class="home-content">
                <div class="home-text">
                    <h2 id="line1">WELCOME TO MY</h2>
                    <h2 id="line2">COMFORT ZONE!</h2>
                    <span class="home-tag">GET STARTED</span>
                </div>
                <div class="home-image">
                    <img src="/jinwoo.gif" alt="About Me">
                </div>
            </div>
        </div>
      </section>


      <!-- ABOUT Section -->
    <section id="about" class="about-section" style="background-image: url('/about.png');">
        <div class="about-container">
            <div class="about-content">
                <div class="about-text">
                    <span class="about-tag">About Me</span>
                    <h2>Get to Know More About Me</h2>
                    <p>I am Tracie Tomon. Currently in my second year of pursuing a Bachelor of Science in Information Technology, with a specialization in Mobile and Internet Technology. People call me Trace, Tres or Trai. Some of my relatives call me Budang, like the Buddha, because I looked like the Buddha when I was born. Any shade of blue is my fave color. I like keeping things neat and tidy. Depending on my mood, I can be a bit of an introvert or an extrovert. I am committed to becoming a skilled IT professional, driven by my passion for technology and continuous learning.</p>
                </div>
                <div class="about-image">
                    <img src="/profile.jpg" alt="About Me">
                </div>
            </div>
        </div>
    </section>


    <!-- EXPERIENCE Section -->
    <section id="services" style="background-image: url('/experience.png');">
        <h4 class="services-title">IT EXPERIENCE</h4>
        <div class="services-container2">
            <div class="service-box2">
                <img src="/it1.png" alt="Exp 1">
                <div class="service-text2">
                    <h3>RamQuest (Android Studio)</h3>
                    <p style="text-align: left !important;">Designed the user interface for a mobile application project using Android Studio</p>
                </div>
            </div>
            <div class="service-box2">
                <img src="/it2.png" alt="Exp 2">
                <div class="service-text2">
                    <h3>RamQuest (Figma)</h3>
                    <p style="text-align: left !important;">Created captivating interfaces and delightful user experiences for websites and mobile apps in a UI/UX Design and Programming course</p>
                </div>
            </div>
            <div class="service-box2">
                <img src="/it3.png" alt="Exp 3">
                <div class="service-text2">
                    <h3>Sole Mission</h3>
                    <p style="text-align: left !important;">Developed a website for a local shoe restoration business with both frontend and backend</p>
                </div>
            </div>
            <div class="service-box2">
                <img src="/it4.png" alt="Exp 4">
                <div class="service-text2">
                    <h3>Coding</h3>
                    <p style="text-align: left !important;">Gained hands-on experience coding in Python and Java during the first year</p>
                </div>
            </div>
            <div class="service-box2">
                <img src="/it5.png" alt="Exp 5">
                <div class="service-text2">
                    <h3>Tech Support (Basic TS)</h3>
                    <p style="text-align: left !important;">Assisted customers with basic troubleshooting on their devices as a customer service representative</p>
                </div>
            </div>
        </div>
    </section>


    <!-- HOBBIES AND INTERESTS -->
    <section id="hobbies" style="background-image: url('/hobbies.png');">
        <h4 class="hobbies-title">HOBBIES & INTERESTS</h4>
        <div class="hobbies-container2">
            <div class="hobbies-box2">
                <div class="hobbies-text2">
                    <img src="/watch.png" alt="Hobby 1">
                    <p>Watching movies and series</p>
                </div>
            </div>
            <div class="hobbies-box2">
                <img src="/read.png" alt="Hobby 2">
                <div class="hobbies-text2">
                    <p>Reading mangas and Novels</p>
                </div>
            </div>
            <div class="hobbies-box2">
                <img src="/clean.png" alt="Hobby 3">
                <div class="hobbies-text2">
                    <p>Cleaning and organizing stuff and room</p>
                </div>
            </div>
            <div class="hobbies-box2">
                <img src="/collect.png" alt="Hobby 4">
                <div class="hobbies-text2">
                    <p>Collect anime merch</p>
                </div>
            </div>
            <div class="hobbies-box2">
                <img src="/karaoke.png" alt="Hobby 5">
                <div class="hobbies-text2">
                    <p>Karaoke session in free time</p>
                </div>
            </div>
        </div>
    </section>

    
    <!-- GOALS Section -->
    <section id="goals" style="background-image: url('/goals.png');">
        <h4 class="goals-title">GOALS & DREAMS</h4>
        <div class="goals-container2">
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>My ultimate goal is to graduate from this course by 2027, ideally with Latin honors, despite my unconventional journey</p>
                </div>
            </div>
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>To secure a well-paying job with a healthy working environment. I aim to leverage my skills to make meaningful contributions in the IT field, financially support my family, and repay those who have helped me</p>
                </div>
            </div>
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>Committed to continuous learning, collaborating with people worldwide, and developing solutions to modern problems to grow my IT career</p>
                </div>
            </div>
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>Aspire to aid the less fortunate, honor my parents' sacrifices, and eventually gain recognition for my achievements</p>
                </div>
            </div>
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>A decent, comfortable life where I have everything I need</p>
                </div>
            </div>
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>I dream of traveling to anime landmarks and attending concerts of my favorite K-pop group, 2NE1, and artists like Bruno Mars</p>
                </div>
            </div>
            <div class="goals-box2">
                <div class="goals-text2">
                    <p>I also dream of traveling the world with my family and loved ones</p>
                </div>
            </div>
        </div>
    </section>


    <!-- EDUCATION Section -->
    <section id="education" style="background-image: url('/education.png');">
        <h4 class="education-title">EDUCATION</h4>
        <div class="education-container2">
            <div class="education-box2">
                <div class="education-text2">
                    <h2>COLLEGE</h2>
                    <h3 style="text-align: left !important;">Bachelor of Science in Information Technology with specialization in Mobile and Internet Technology</h3>
                    <h4><a href="https://www.apc.edu.ph/">Asia Pacific College</a></h4>
                    <p>August 2023 - Present</p>
                    <br>
                    <h3 style="text-align: center !important;">Bachelor of Secondary Education major in General Science</h3>
                    <h4><a href="https://southernleytestateu.edu.ph/index.php/en/">Southern Leyte State University</a></h4>
                    <p>August 2019 - 2021</p>
                </div>
            </div>
            <div class="education-box2">
                <div class="education-text2">
                    <h2>SENIOR HIGH SCHOOL</h2>
                    <h3 style="text-align: center !important;">Accountancy, Business, and Management</h3>
                    <h4><a href="https://www.facebook.com/officiallystac/">Saint Thomas Aquinas College</a></h4>
                    <p>June 2017 - March 2019</p>
                </div>
            </div>
            <div class="education-box2">
                <div class="education-text2">
                    <h2>JUNIOR HIGH SCHOOL</h2>
                    <h4><a href="https://www.facebook.com/profile.php?id=100063784971452">Libas National High School</a></h4>
                    <p>Grade 9 & 10</p>
                    <p>2015 - 2017</p>
                    <br>
                    <h4><a href="https://www.facebook.com/DepedTayoCCTMNHS301314/">Cesar C. Tan Memorial National High School</a></h4>
                    <p>Grade 7 & 8</p>
                    <p>2013 - 2015</p>
                </div>
            </div>
            
            
        </div>
    </section>
    
    </main>
  </div>
</template>



<script>
export default {
  name: "ResponsivePage",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>


