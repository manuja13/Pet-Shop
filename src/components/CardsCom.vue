<template>
  <div class="container mx-auto mt-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">----- Products -----</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="card in cards" :key="card.id">
        <div class="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg dark:shadow-dark-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
          <a :href="card.link">
            <img class="h-56 w-full object-cover" :src="card.image" :alt="card.title">
          </a>
          <div class="p-4">
            <a :href="card.link">
              <h5 class="text-lg font-semibold text-white">{{ card.title }}</h5>
            </a>
            <p class="mt-2 text-gray-100">{{ card.description }}</p>
            <center><a :href="card.link" class="mt-4 inline-block px-4 py-2 bg-white text-sm font-semibold leading-none shadow-md rounded-full text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">Read more</a></center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  data() {
    return {
      cards: [
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIGhJJ-u45B-Gf_2A2LIWLa_SyWoh10I37A&s',
          title: 'Dog Food',
          description: 'Royal Canin Adult Dry Dog Food, 15lb',
          link: '#'
        },
        {
          id: 2,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXf9_p5XEx5jpQZwVmTGvF9oc6ah2ljgP9w&s',
          title: 'Cat Food',
          description: 'Hills Science Wet Diet Cat Food',
          link: '#'
        },
        {
          id: 3,
          image: 'https://zexsazone.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-06-14-at-11.27.01-AM-2.jpeg',
          title: 'Pet Bed',
          description: 'Orthopedic Memory Foam Pet Bed, Large Size',
          link: '#'
        },
        {
          id: 4,
          image: 'https://i.insider.com/646e3fb56f9a480018736917?width=1200&format=jpeg',
          title: 'Pet Toy',
          description: 'Interactive Nylon Puzzle Toy for Dogs, Stimulating',
          link: '#'
        },
        {
          id: 5,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4ppKr33fZ-5kTJn9274BMPKEeVL8QmfBdQ&s',
          title: 'Cat Litter',
          description: 'Arm & Hammer Clump & Seal Platinum Cat Litter',
          link: '#'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 0px;
}

.transition-transform {
  transition: transform 0.8s ease;
}
</style>
