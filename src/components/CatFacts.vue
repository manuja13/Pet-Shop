<template>
    <div class="catfacts"></div>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 class="text-3xl font-bold mb-4 text-blue-600">Cat Facts</h2>
        <p class="text-lg text-gray-700 mb-6">{{ fact }}</p>
        <button @click="getRandomFact" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Random Fact
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CatFacts',
    data() {
      return {
        fact: '',
      };
    },
    methods: {
      async getRandomFact() {
        try {
          const response = await fetch('https://catfact.ninja/fact');
          const data = await response.json();
          this.fact = data.fact;
        } catch (error) {
          console.error('Error fetching cat facts:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  .flex {
    display: flex;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .items-center {
    align-items: center;
  }
  
  .h-screen {
    height: 100vh;
  }
  
  .bg-gray-100 {
    background-color: #f7fafc;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .p-8 {
    padding: 2rem;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .text-blue-600 {
    color: #3182ce;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
  
  .text-gray-700 {
    color: #4a5568;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .bg-blue-500 {
    background-color: #4299e1;
  }
  
  .hover\:bg-blue-700:hover {
    background-color: #2b6cb0;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .rounded {
    border-radius: 0.25rem;
  }
  </style>
  