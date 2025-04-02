<script setup>
import { RouterView } from 'vue-router' //RouterLink

import NavigationBar from './components/navigationBar.vue';
// @ is an alias to /src

//condition for navbar exist
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute
const route = useRoute(); // Get the current route
const hasNavBar = computed(() => route.meta.navBarExist);
//

</script>

<template>
  <!-- <NavigationBar /> -->
  <div class="app">
    <!-- <div class="main"> -->
    <!-- <RouterView v-slot="{ Component }">
      <NavigationBar v-if="hasNavBar" />
      <component :is="Component" />
    </RouterView> -->
    <NavigationBar v-if="hasNavBar" />
    <div :class="{ 'main-with-navbar': hasNavBar }">
      <RouterView />
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: { NavigationBar },
};

</script>

<style>
.main-with-navbar {
  padding-top: 70px;
}
</style>

<!-- <style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f5f5f5;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

.main {
  //background-attachment: fixed;
  //position: relative;
  //height: 100vh;
  padding-top: 80px;
  overflow: hidden;
}
</style> -->