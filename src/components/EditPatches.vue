<template>
    <div class="pt-4 space-y-4">
      <!-- Loop through each patch from the store -->
      <div
        v-for="(patch, index) in allPatches"
        :key="patch.item_number"
        :class="{
          'bg-gray-900': index % 2 === 0, 
          'bg-gray-800': index % 2 !== 0
        }"
        class="rounded-lg shadow-md overflow-hidden"
      >
        <!-- Table Header with Titles -->
        <div class="flex bg-gray-700 text-white py-2 px-4 text-sm font-semibold">
          <div class="flex-1 text-center">Item Name</div>
          <div class="flex-1 text-center">Description</div>
          <div class="flex-1 text-center">Quantity</div>
          <div class="flex-1 text-center">Price</div>
          <div class="flex-1 text-center">Creation Date</div>
          <div class="flex-1 text-center">Image</div>
        </div>
  
        <!-- Table Body -->
        <div class="flex flex-row px-4 py-2 text-white">
          <div class="flex-1 text-center">{{ patch[0] }}</div>
          <div class="flex-1 text-center">{{ patch[1] }}</div>
          <div class="flex-1 text-center">{{ patch[2] }}</div>
          <div class="flex-1 text-center">{{ patch[3] }}</div>
          <div class="flex-1 text-center">{{ formatDate(patch[4]) }}</div>
          <div class="flex-1 text-center">
            <img :src="patch.item_image_ref" alt="Item Image" class="w-12 h-12 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import { useStore } from '../stores/counter'
  import { postToBackend } from '../helpers/axiosHelper' // Make sure to replace this with your actual import for the API function
  
  export default {
    setup() {
      const store = useStore()
      const allPatches = ref([]) // Create a reactive reference for patches
  
      onMounted(async () => {
        try {
          // Fetch patches from the backend using the provided API call
          const resp = await postToBackend('get_patches', { guid: store.api.sessionToken })
          
          // Assuming `resp` contains the patches in an array, update the store
          allPatches.value = resp
          store.allPatches = resp // Update the store if you need to access it globally
  
          console.log('Patches fetched:', resp.length)
        } catch (error) {
          console.error('Failed to fetch patches:', error)
          // Optionally show an error message to the user
        }
      })
  
      // Method to format the creation epoch into a human-readable date
      const formatDate = (epoch) => {
        const date = new Date(epoch * 1000)
        return date.toLocaleDateString() // Customize as needed
      }
  
      return { allPatches, formatDate }
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Custom styles to enhance layout */
  </style>
  