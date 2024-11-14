<script setup>
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/counter';

const router = useRouter()

function goToHome() {
    const store = useStore()
    if (store.sessionToken != "") {
        router.push({name: 'home'})
    }
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