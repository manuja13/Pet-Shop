<template>
  <div class="flex justify-center flex-wrap mt-20">
    <div v-for="item in data" :key="item.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded overflow-hidden shadow-lg m-4 border border-gray-300">
      <div class="rounded overflow-hidden shadow-lg">
        <img :src="getImageUrl(item.imageUrl)" :alt="item.ProductName" class="w-full h-48 object-cover">
      <div class="px-6 py-4">
        <div class="mb-6">
          <label class="block text-black text-sm font-bold" for="name">Product Name</label>
          <h3 class="text-sky-500 text-xl">{{ item.ProductName }}</h3>
        </div>
        <div class="mb-4">
          <label class="block text-black text-sm font-bold" for="name">Product Description</label>
          <h4 class="text-sky-500 text-xl">{{ item.ProductDescription }}</h4>
        </div>
        <div class="mb-2">
          <label class="block text-black text-sm font-bold mb-2" for="Price">Price</label>
          <p class="text-gray-700">${{ item.Price }}</p>
        </div>
        <center>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy</button>
        </center>
      </div>
    </div>
  </div>
  </div>div>
</template>

<script>
import jsonData from '@/jsonData.json';

export default {
  data() {
    return {
      data: jsonData
    };
  },
  methods: {
    getImageUrl(url) {
      // Check if the URL is a relative path to the assets folder
      if (url.startsWith('../assets')) {
        return require(`@/assets/${url.replace('../assets/', '')}`);
      }
      return url;
    }
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
