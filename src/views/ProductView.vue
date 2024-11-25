<template>
  <div class="productlist">
    <div class="container mx-auto mt-28">
      <header class="bg-gradient-to-r from-green-400 to-blue-400 text-white p-6 rounded-lg shadow-md text-center">
        <h1 class="text-4xl font-bold">Pet Care Products</h1>
        <p class="text-lg mt-2">Keep your pets happy and healthy with our expert advice.</p>
      </header>
    </div>
    <div class="container mx-auto mt-12 p-6">
      <product />
    </div>
  </div>
</template>

<script>
import product from '@/components/JasonData.vue';

export default {
  name: 'HomeView',
  components: {
    product
  }
};
</script>

<style scoped>
.productlist {
  font-family: 'Roboto', sans-serif;
  background-color: #f9fafb; /* Light background color for the page */
}
.container {
  max-width: 1200px;
}
header {
  background: linear-gradient(135deg, #68d391, #63b3ed);
}
</style>
