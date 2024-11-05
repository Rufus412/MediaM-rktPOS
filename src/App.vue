<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
      <div class="absolute  h-full w-full ">
            <Header class="relative z-10"></Header>
            <RouterView class=" relative h-[90%] z-0 class px-4"/>
      </div>
</template>

<style scoped>
</style>
