<script setup>
//import axios from 'axios';
import { postToBackend } from '../helpers/axiosHelper'
import { useStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
let a
let inputPassword
const store = useStore()
const router = useRouter()
async function login(){
    a = await postToBackend('signIn', {password: inputPassword, epoch: Date.now()})
    if(a.status == 'success' && a.token != '') {
        router.push({name: 'main_menu'})
    }
    else console.log("wrong password")
}

</script>

<template>
    <div class="relative left-[50%] transformUp top-10 items-center  w-fit  transformLeft">
        <div class="flex flex-col items-center">
            <div class="flex ">
                <div>
                    <label for="pass">Password:
                    </label>
                </div>
                <div class="bg-black w-fit ml-3">
                    <input class="border-1 m-[1px] border-dashed border-black shadow-md" v-model="inputPassword" type="password" id="pass" name="password" required />
                </div>
            </div>
            <div>
                <button @click="login" class="bg-[#06D6A0] p-1 text-md rounded-md shadow-md mt-2" type="button" >Login</button>
            </div>
            <h1>{{ inputPassword }}</h1>
        </div>
    </div>
</template>

<style scoped>

.transformLeft{
    transform: translate(-50%);
}

</style>