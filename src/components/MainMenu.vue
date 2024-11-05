<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
function test(){
    console.log("Tested")
}

function add_patch() {
    router.push({name: 'add_patch'})
}
function edit_patch() {
    router.push({name: 'edit_patch'})
}
</script>

<template>
    <div>
        <div class="h-full grid grid-rows-5 grid-cols-5 gap-3 pt-4">
            <div class="relative col-span-1 row-start-1 rounded-md shadow-md hover:bg-gray-100" @click="add_patch()">
                <div class="text-center top-[50%] transformUp relative">
                    Add Patch
                </div>
            </div>
            <div class="relative col-span-1 row-start-2 rounded-md shadow-md hover:bg-gray-100" @click="edit_patch()">
                <div class="text-center top-[50%] transformUp relative">
                    Edit Patch
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.transformUp{
    transform: translate(0%, -50%);
}
</style>
