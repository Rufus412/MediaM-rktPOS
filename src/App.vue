<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
      <div class="absolute  h-full w-full ">
            <Header class="relative"></Header>
            <RouterView class=" relative h-[90%] class px-4"/>
      </div>
</template>

<style scoped>
</style>
