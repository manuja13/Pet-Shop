<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8" style="background-image: url('https://example.com/background.jpg');">
    <div class="max-w-md w-full space-y-8">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        <div v-if="error" class="alert alert-danger mt-4 p-3 text-red-600 border border-red-400 rounded">{{ error }}</div>
        <form @submit.prevent="Login" class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                name="email"
                required
                autofocus
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
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
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
  name: "LoginComponent",
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    }

    return { Login, email, password, error }
  }
}
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

input:focus {
  outline: none;
}

button:focus {
  outline: none;
}
</style>
