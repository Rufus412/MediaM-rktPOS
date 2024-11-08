<script setup>
import { useRouter } from 'vue-router';
import { postToBackend } from '../helpers/axiosHelper'
import { useStore } from '../stores/counter'
import PatchForm from './PatchForm.vue'
import DisplayPatches from './DisplayPatches.vue'
import { ref } from 'vue'

const router = useRouter()
const store = useStore()

function test(){
    console.log("Tested")
}
</script>


<script>

export default {
    setup() {
      const store = useStore()
      const allPatches = ref([]) // Create a reactive reference for patches
  
      onMounted(async () => {
        try {
          const resp = await postToBackend('get_patches', { guid: store.api.sessionToken })
          
          allPatches.value = resp
          store.allPatches = resp // Update the store if you need to access it globally
  
          console.log('Patches fetched:', resp.length)
        } catch (error) {
          console.error('Failed to fetch patches:', error)
        }
      })
  
      return { allPatches, formatDate }
    },  
    data() {
        return {
            state: 0,
            formLable: '',
            allPatches: [],
            patchVals: {
                Name: '',
                Description: '',
                Quantity: null,
                Price: null,
                item_image_ref: ''
            },
            action: 'add'
        }
    },
    methods: {
        add_patch() {
            this.formLable = 'New Patch'
            this.state = 1
            this.patchVals = {
                Item_Number: 0,
                Name: '',
                Description: '',
                Quantity: null,
                Price: null,
                item_image_ref: ''
            }
            this.mode = 'add'
            //router.push({name: 'add_patch'})
            
        },
        returnToMain(formData) {
            const store = useStore()
            console.log(formData)
            switch (formData.mode) {
                case 'add':
                    postToBackend('add_patch', {guid: store.api.sessionToken, item_name: formData.data.Name, item_description: formData.data.Description, item_quantity: formData.data.Quantity, item_price: formData.data.Price, item_image_ref: formData.data.item_image_ref })
                    break;
                case 'edit':
                    console.log("a")
                    postToBackend('update_patch', {guid: store.api.sessionToken, item_number: formData.data.Item_Number, item_name: formData.data.Name, item_description: formData.data.Description, item_quantity: formData.data.Quantity, item_price: formData.data.Price, item_image_ref: formData.data.item_image_ref })
                    break;
                default:
                    break;
            }
            console.log(formData)
            
            this.state = 0
        },
        async edit_patch(formData) {
            const store = useStore()
            try {
                const resp = await postToBackend('get_patches', { guid: store.api.sessionToken })
                
                this.allPatches = resp
                //store.allPatches = resp // Update the store if you need to access it globally
        
                console.log('Patches fetched:', resp.length)
            } catch (error) {
                console.error('Failed to fetch patches:', error)
            }
            this.mode = 'edit'
            this.state = 2   
        },
        async editSelected(patch) {
            console.log(patch)
            this.patchVals.Item_Number = patch[0]
            this.patchVals.Name = patch[1]
            this.patchVals.Description = patch[2]
            this.patchVals.Quantity = patch[3]
            this.patchVals.Price = patch[4]
            this.patchVals.item_image_ref = patch[6]
            this.state = 1
        }
    }
}
</script>

<template>
    <div v-if="state == 0" class="h-[90%] w-full">
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
    <div v-if="state == 1">
        <PatchForm @test="returnToMain" :formData="patchVals" :lable="formLable" :mode="mode"/>
    </div>
    <div v-if="state == 2">
        <DisplayPatches @selected="editSelected" :allPatches="allPatches"/>
    </div>
    
</template>

<style scoped>

.transformUp{
    transform: translate(0%, -50%);
}
</style>
