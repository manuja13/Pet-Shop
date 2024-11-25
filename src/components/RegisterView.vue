<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8" style="background-image: url('https://example.com/background.jpg');">
    <div class="max-w-md w-full space-y-8">
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        <div v-if="error" class="alert alert-danger mt-4 p-3 text-red-600 border border-red-400 rounded">{{ error }}</div>
        <form @submit.prevent="Register" class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                name="name"
                required
                autofocus
                v-model="name"
              />
            </div>

            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                name="email"
                required
                v-model="email"
              />
            </div>

            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                name="password"
                required
                v-model="password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "RegisterComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          name: name.value
        })
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    }

    return { Register, name, email, password, error }
  }
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.group:hover .group-hover\:text-indigo-400 {
  color: #5a67d8;
}
</style>
