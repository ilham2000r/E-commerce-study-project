<script setup>
import navbar from '@/components/layout/navbar.vue'
import { reactive, computed } from 'vue'
import { RouterLink,useRouter } from 'vue-router'

import { useCartStore } from '@/stores/user/cart'

const router = useRouter()
const cartStore = useCartStore()

const formData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    },
]

const isFormValid = computed(() => {
    return userFormData.email && userFormData.name && userFormData.address && userFormData.email.includes('@' && '.') 
})

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const payment = () => {
    cartStore.processCheckout(userFormData)
    router.push({name: 'success'})
}
</script>

<template>
    <navbar>
        <h1 class="text-3xl font-bold m-4 pl-8">Check out</h1>
        <div class="max-w-screen-xl mx-auto flex ">
            <section class="flex-auto w-64 p-4 checkOutForm rounded-md">
                <div v-for="(form, index) in formData" :key="form.id" class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <textarea v-if="index === 2" v-model="userFormData[form.field]" class="textarea textarea-bordered textarea-lg w-full h-40 resize-none" ></textarea>
                    <input v-else v-model="userFormData[form.field]" type="text" class="input input-bordered w-full " />
                </div>
                <button @click="payment()" class="btn btn-neutral w-full mt-8 mb-1" :disabled="!isFormValid">Confirm</button>
            </section>
            <section  class="flex-auto w-32 ">
                <div v-for="item in cartStore.items" :key="item" class="flex bg-slate-300 capacity-50 mx-4 mb-2 rounded-md">
                    <div class="flex-1 ">
                        <img class="w-full p-8" :src="item.imageUrl" >
                    </div>
                    <div class="flex-1 m-8 ">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div><b>{{ item.name }}</b></div>
                                <div>Amout {{ item.quantity }} pcs</div>
                                <div>Size{{ item.size }} US</div>
                            </div>
                            <RouterLink :to="{name: 'cart'}" class="font-bold">Edit</RouterLink>
                        </div>
                    </div>
                    
                </div> 
                <div class="divider m-4"></div>
                <div class="my-4 mx-8">
                        <div><b>Order Summary</b></div>
                        <div class="flex justify-between">
                            <div>Total Price</div>
                            <div>{{ cartStore.summaryPrice.toLocaleString('th-TH') }} Baht</div>
                        </div>
                        <div class="flex justify-between">
                            <div>Delivery Cost</div>
                            <div>0</div>
                        </div>
                </div>
                    <div class="divider m-4 mx-auto"></div>
                    <div class="flex justify-between mx-8 my-2">
                            <div><b>Total Summary Price</b></div>
                            <div class="mb-20"><b>{{ cartStore.summaryPrice.toLocaleString('th-TH') }} Baht</b></div>
                        </div>
            </section>
        </div>
    </navbar>
</template>

<style scoped> 
.checkOutForm {
    background-color: rgb(220, 220, 220);
    height: 570px;
}
</style>