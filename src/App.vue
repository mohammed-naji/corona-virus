<template>
  <nav-bar />
  <router-view></router-view>
  <footer class="py-5 text-center">
    <p class="m-0"> &copy; {{ new Date().getFullYear() }} جميع الحقوق محفوظة <a href="#"> محمد ناجي </a> </p>
  </footer>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar

  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');
#app {
  font-family: 'Almarai', sans-serif;
}

</style>
