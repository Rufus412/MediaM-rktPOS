<script setup>
//import axios from 'axios';
import { callBackend } from '../helpers/axiosHelper'
let a
let password
async function login(){
    a = await callBackend('signIn', password)
    console.log(password)
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
                    <input class="border-1 m-[1px] border-dashed border-black shadow-md" v-model="password" type="password" id="pass" name="password" required />
                </div>
            </div>
            <div>
                <button @click="login" class="bg-[#06D6A0] p-1 text-md rounded-md shadow-md mt-2" type="button" >Login</button>
            </div>
            <h1>{{ password }}</h1>
        </div>
    </div>
</template>

<style scoped>

.transformLeft{
    transform: translate(-50%);
}

</style>