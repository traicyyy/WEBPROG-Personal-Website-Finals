<template>
  <footer id="contact" class="footer">
    <div class="footer-container">
      <div class="footer-icons">
        <a href="https://www.linkedin.com/in/tracie-tomon-454836287/" target="_blank" class="icon">
          <i class="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100078488841590" target="_blank" class="icon">
          <i class="fab fa-twitter"></i>
          <span>Facebook</span>
        </a>
        <a href="mailto:tracetomon17@gmail.com" class="icon">
          <i class="fas fa-envelope"></i>
          <span>E-mail</span>
        </a>
        <a href="tel:+639307779265" class="icon">
          <i class="fas fa-phone"></i>
          <span>Phone</span>
        </a>
        <a href="https://github.com/traicyyy" target="_blank" class="icon">
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>
      </div>
      <p class="footer-text">© 2025 Tracie Tomon. All Rights Reserved</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
    font-family: 'Anonymous Pro', monospace;
    background-color: black;
    color: white;
    text-align: center;
    padding: 20px 0;
    font-family: Arial, sans-serif;
    border-top: 2px solid #ff572e;
    width: 100%;
}

.footer-container {
    font-family: 'Anonymous Pro', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer-icons {
    font-family: 'Anonymous Pro', monospace;
    display: flex;
    padding-top: 30px;
    justify-content: center;
    gap: 34px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.icon {
    text-decoration: none;
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 0.3s ease-in-out;
}

.icon i {
    font-size: 16px;
    margin-bottom: 5px;
}

.icon span {
    transition: color 0.3s ease-in-out;
}

/* Hover Effect */
.icon:hover {
    color: #ff572e;
}

.icon:hover i {
    transform: scale(1.2);
    color: #ff572e;
}

.icon:hover span {
    color: #ff572e;
}

.footer-text {
    font-size: 14px;
    margin-top: 20px;
    padding-top: 10px;
}
</style>
