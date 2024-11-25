<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div v-if="user.loggedIn">
            <div class="text-center text-2xl font-semibold mb-4">Welcome, {{ user.data.displayName }}</div>
            <div class="text-center">
              <div class="mb-4 text-green-600">You are logged in!</div>
              <button @click.prevent="signOut" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Log Out
              </button>
            </div>
          </div>
          <div v-else class="text-center text-red-600">
            You are not logged in!
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { computed } from "vue";
  import { auth } from "../firebaseConfig";
  
  export default {
    name: "DashBoard",
    setup() {
      const store = useStore();
      const router = useRouter();
  
      auth.onAuthStateChanged((user) => {
        store.dispatch("fetchUser", user);
      });
  
      const user = computed(() => {
        return store.getters.user;
      });
  
      const signOut = async () => {
        await store.dispatch("logOut");
        router.push("/");
      };
  
      return { user, signOut };
    },
  };
  </script>
  
  <style scoped>
  .min-h-screen {
    min-height: 100vh;
  }
  </style>
  