<template>
  <nav class="glass-navbar fixed w-full z-20 top-0 left-0 border-b">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/Alfie-Pet-Supplies.png" class="h-16 w-auto" alt="Alfie Pet Supplies Logo" />
        <span class="self-center text-1xl font-semibold whitespace-nowrap text-black font-custom">Alfie Pet Supplies</span>
      </router-link>
      <!-- Responsive Menu -->
      <div class="items-center justify-between w-full md:hidden" id="navbar-toggle" @click="toggleMenu">
        <button class="glass-button text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Desktop Menu -->
      <div :class="['items-center justify-between w-full md:flex md:w-auto md:order-1', menuOpen ? 'block' : 'hidden']" id="navbar-user">
        <ul @click="toggleMenu" class="glass-menu flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <router-link to="/" class="glass-link block px-4 py-3 text-black focus:outline-none">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="glass-link block px-4 py-3 text-black focus:outline-none">About</router-link>
          </li>
          <li>
            <router-link to="/products" class="glass-link block px-4 py-3 text-black focus:outline-none">Products</router-link>
          </li>
          <li>
            <router-link to="/petcaretips" class="glass-link block px-4 py-3 text-black focus:outline-none">Pet Care Tips</router-link>
          </li>
          <li>
            <router-link to="/contact" class="glass-link block px-4 py-3 text-black focus:outline-none">Contact</router-link>
          </li>
          <li>
            <router-link to="/catfacts" class="glass-link block px-4 py-3 text-black focus:outline-none">Cat Facts</router-link>
          </li>
          <!-- Register Button -->
          <li>
            <router-link to="/register" class="glass-link block px-4 py-2 text-black focus:outline-none">Register</router-link>
          </li>
          <!-- Login Button -->
          <li>
            <router-link to="/login" class="glass-link block px-4 py-2 text-black focus:outline-none">Login</router-link>
          </li>
          <!-- Profile Icon -->
          <li>
            <router-link to="/dashboard" class="glass-link block px-4 py-2 text-black focus:outline-none">
              <!-- Add your profile icon here -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.glass-navbar {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(0, 0, 0, 0.18);
}

/* Additional styling for menu items */
nav ul li {
  margin: 0.25rem 0;
}

nav ul li:hover, nav ul li:focus-within {
  background: rgba(0, 0, 0, 0.2);
}

.font-custom {
  font-family: 'Great Vibes', cursive; /* Replace with your desired font */
}


</style>
