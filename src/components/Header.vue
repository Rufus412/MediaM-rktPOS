<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goToHome() {
    router.push({name: 'sign_in'})
}
</script>

<template>
    <div class="w-full h-[10%] bg-[#0D1321] sticky top-0 border-1 border-black flex flex-row">
        
        <img class="" src="../assets/logo.png" @click="goToHome()" >
        <div class="flex w-[30%] justify-center">
        </div>
        

    </div>
</template>