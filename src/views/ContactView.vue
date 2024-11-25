<template>
  <div class="container mx-auto mt-28">
    <header class="bg-gray-600 text-white p-6 rounded-lg shadow-md">
      <h1 class="text-4xl font-bold">Contact Us</h1>
      <p class="text-lg mt-2">Have a question or feedback? Get in touch with us!</p>
    </header>
  </div>

  <div class="container mx-auto my-10 px-4">
    <form class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold">Your Name</label>
        <input type="text" id="name" name="name" class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your name" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold">Your Email</label>
        <input type="email" id="email" name="email" class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" required>
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-semibold">Message</label>
        <textarea id="message" name="message" rows="5" class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your message" required></textarea>
      </div>
      <button type="submit" class="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
    </form>
  </div>

  <div class="container mx-auto my-10 px-4">
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Our Store Information</h2>
      <p class="text-lg text-gray-700 mb-2">Visit our store or contact us directly:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Address: 123 Main Street, City, Country</li>
        <li>Phone: 123-456-7890</li>
        <li>Email: info@alfiepetsupplies.com</li>
      </ul>
      <p class="text-lg text-gray-700">We're open Monday to Saturday from 9:00 AM to 6:00 PM. Come say hi!</p>
    </div>
  </div>

  <div class="container mx-auto py-6 text-center">
    <p class="text-gray-600">Have a question? Feel free to reach out to us!</p>
  </div>
</template>