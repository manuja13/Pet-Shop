<template>
  <div class="bg-gray-50 py-12">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Join Our Community</h2>
      <p class="text-lg text-gray-700 mb-8">
        Subscribe today to enjoy exclusive content, receive discount vouchers, and stay updated with our latest pet health tips.
      </p>

      <div class="flex flex-wrap justify-center mb-12">
        <div class="w-full md:w-1/3 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Exclusive Content</h3>
            <p class="text-gray-700">
              Get access to articles, tips, and guides that are only available to our subscribers.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Discount Vouchers</h3>
            <p class="text-gray-700">
              Receive printable discount vouchers to use in our shop.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Pet Health Tips</h3>
            <p class="text-gray-700">
              Stay informed with regular updates on how to keep your pets healthy and happy.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-md mx-auto">
        <a href="/login" class="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Subscribe Now</h3>
            <span class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Subscribe</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionSection',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      // Implement subscription logic here, e.g., sending the email to your backend
      console.log('Subscribed with email:', this.email);
      alert('Thank you for subscribing!');
      this.email = ''; // Clear the input field
    }
  }
};
</script>

<style scoped>
/* Additional styling if needed */

/* Ensure the parent container has no extra margin or padding */
.container {
  padding-bottom: -10px;
  margin-bottom: 0; /* Add this line to remove extra space below the container */
}

/* Hover effects for buttons */
a:hover {
  background-color: #95a9d4;
}

/* Transition effects */
.transition-transform {
  transition: transform 0.3s ease;
}

/* Dark mode styles */
.dark .text-gray-900 {
  color: #fff;
}

.dark .text-gray-700 {
  color: #a3a3a3;
}
</style>
