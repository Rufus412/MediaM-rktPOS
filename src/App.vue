<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue'
import Header from './components/Header.vue';
</script>

<template>
      <div class="absolute  h-full w-full ">
            <Header class="relative"></Header>
            <RouterView class=" relative"/>
      </div>
</template>

<style scoped>
</style>
