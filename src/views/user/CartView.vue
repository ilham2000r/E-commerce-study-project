<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import navbar from '@/components/layout/navbar.vue'

import { useCartStore } from '@/stores/user/cart'
import close from '@/components/icons/close.vue'

const cartStore = useCartStore()

onMounted (() => {
    cartStore.loadCart()
})

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value) 
    cartStore.updateQuantity(index, newQuantity)
}


const sizeSelect = (event, index) => {
    const newSize = parseFloat(event.target.value)
    cartStore.updateSize(index, newSize)
}

const canProceedToPayment = () => {
    return cartStore.items.length > 0 && cartStore.items.every(item => item.size !== 0) // validation
}

</script>


<template>
    <navbar>
        <div>
            <h1 class="text-3xl font-bold m-4 pl-8">Shopping cart</h1>
            <div class="max-w-screen-xl min-h-80 mx-auto flex mb-5">
                <div  class="flex-auto w-64 p-8 ">
                    <div 
                        v-if="cartStore.items.length === 0">
                        <div class="text-l font-bold" >
                            Cart in empty
                        </div>
                    </div>
        
                    <div v-else v-for="(item, index) in cartStore.items" :key="item.id" class="flex ">
                        <div class="flex-1">
                            <img class="w-full p-4" :src="item.imageUrl" >
                        </div>
                        <div class="flex-1">
                            <div class="relative flex flex-col justify-between h-full">
                                <div>
                                    <div class="grid grid-cols-2 pt-8">
                                        <div>
                                            <div class="text-xl font-bold">{{ item.name }}</div>
                                            <div class="mt-2">{{ item.about }}</div>
                                            <div><b>Price</b> {{ item.price.toLocaleString('th-TH') }} <b>Baht</b></div>
                                        </div>
                                        <div class="flex justify-end mr-8">                          
                                                <div class="badge badge-ghost">1 pcs</div>        
                                        </div>
                                        <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0 cursor-pointer">
                                            <close></close>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 my-2">
                                        <div class="font-bold mb-2">
                                        size (US)
                                        </div>
                                        <!-- '0','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12' -->
                                        <select v-model="item.size" @change="sizeSelect($event, index)" class="select w-1/3">
                                            <option 
                                                v-for="size in [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12]"  
                                                :value="size"
                                                :key="size.id">
                                                {{ size }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-auto w-32 h-72 bg-zinc-200 p-4">
                    <div class="text-xl font-bold">
                        Order Summary
                    </div>
                    <div class="my-4 divide-y divide-black">
                        <div class="flex justify-between py-2">
                            <div>Price </div>
                            <div>{{ cartStore.summaryPrice.toLocaleString('th-TH') }} Baht</div>
                        </div>
                        <div class="flex justify-between py-2">
                            <div>Delivery Cost</div>
                            <div>0 Baht</div>
                        </div>
                        <div class="flex justify-between py-2">
                            <div>Total Price</div>
                            <div>{{cartStore.summaryPrice.toLocaleString('th-TH') }} Baht</div>
                        </div>
                    </div>
                    
                    <div v-if="canProceedToPayment()">
                        <RouterLink :to="{ name: 'confirm' }" class="btn btn-neutral w-full" >Payment</RouterLink>
                    </div>
                    <div v-else>
                        <button class="btn w-full" disabled>Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </navbar>
</template>