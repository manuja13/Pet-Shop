<template> 
  <div>
    <main>
      <router-view/>
    </main>
  </div>

  <NavBar/>
  <ProFooter/>
</template>


<script>
import NavBar from "@/components/NavBar.vue"
import ProFooter from "@/components/ProFooter.vue";
export default {
  name: 'App',
  components: {
    NavBar,
    ProFooter
  },
}
</script>

<style>

</style>
