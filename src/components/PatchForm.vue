<script setup>
import { postToBackend } from '../helpers/axiosHelper'
import { useStore } from '../stores/counter'
import { useRouter } from 'vue-router';
</script>

<script>
export default {
  props: {
    lable: {
      type: String,
      default: ''
    },
    formData: {
      type: JSON,
      default: {
        Item_Number: 0,
        Name: '',
        Description: '',
        Quantity: null,
        Price: null,
        item_image_ref: '',
      }
    },
    mode: {
      type: String
    }
  },
  data() {
    return {
    };
  },
  methods: {
    handleSubmit() {
        console.log(this.formData);
        this.$emit('test', {data: this.formData, mode: this.mode})
    }
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">{{ lable }}</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Input Group 1 -->
        <div class="mb-4">
          <label for="input1" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            v-model="formData.Name"
            type="text"
            id="input1"
            placeholder="Patch Name"
            class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Input Group 2 -->
        <div class="mb-4">
          <label for="input2" class="block text-sm font-medium text-gray-700">Description</label>
          <input
            v-model="formData.Description"
            type="text"
            id="input2"
            placeholder="Patch Description"
            class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Input Group 3 -->
        <div class="mb-4">
          <label for="input3" class="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            v-model="formData.Quantity"
            type="number"
            id="input3"
            placeholder="Patch Quantity"
            class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Input Group 4 -->
        <div class="mb-4">
          <label for="input4" class="block text-sm font-medium text-gray-700">Price</label>
          <input
            v-model="formData.Price"
            type="number"
            id="input4"
            placeholder="Patch Price"
            class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Input Group 5 -->
        <div class="mb-4">
          <label for="input5" class="block text-sm font-medium text-gray-700">Image Ref</label>
          <input
            v-model="formData.item_image_ref"
            type="text"
            id="input5"
            placeholder="Image Ref(link to image)"
            class="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>