<template>
  <div class="heroImage">
    <div class="heroText">
      <h1>ALFIE PET SUPPLIES</h1>
      <h2>Explore</h2>
      <router-link to="/products" class="heroButton">Shop Now</router-link>
    </div>
  </div>
</template>

<style scoped>
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.heroImage {
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/src/assets/homeimage.jpg");
  height: 100vh;
  width: 100vw; /* Increased width */
  max-width: 100%;
  max-height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  margin-top: -20px; /* Added top margin */
}

.heroText {
  color: white;
  text-align: center;
  opacity: 0; /* Initial state for animation */
  animation: fadeIn 2s forwards; /* Apply animation */
}

.heroText h1 {
  font-size: 70px; /* Increased font size */
  margin: 0;
  animation: slideInFromTop 2s forwards; /* Slide in from top animation for h1 */
}

.heroText h2 {
  font-size: 30px; /* Increased font size */
  margin: 10px 0;
  animation: fadeInScale 2s forwards; /* Fade in and scale animation for h2 */
}

.heroButton {
  display: inline-block;
  padding: 15px 30px; /* Increased padding */
  font-size: 20px; /* Increased font size */
  color: white; /* Text color */
  text-decoration: none; /* Remove underline */
  cursor: pointer;
  animation: slideInFromBottom 2s forwards; /* Slide in from bottom animation for button */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth background color transition */
}

.heroButton:hover {
  background-color: rgba(0, 0, 0, 0.7); /* Darker background on hover */
}

/* Keyframes for fade-in animation */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Keyframes for slide-in from top animation */
@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Keyframes for fade-in and scale animation */
@keyframes fadeInScale {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Keyframes for slide-in from bottom animation */
@keyframes slideInFromBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
