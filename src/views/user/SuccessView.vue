<script setup>
import { ref,onMounted } from 'vue';
import navbar from '@/components/layout/navbar.vue'

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()
const orderData = ref({})

const clearCart = () => {
    cartStore.clearCart()
}

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
    console.log(cartStore.checkout)
})
</script>

<template>
    <navbar>
        <div class="flex flex-col items-center">
            <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
                <div>
                    <div class="text-2xl font-bold">Your order is successful!</div>
                    <div>Hi {{ orderData.name }}</div>
                    <div>Waiting for the product</div>
                </div>
                <div class="divider"></div>
                <div class="grid grid-cols-4 gap-2 ">
                    <div class="text-center">
                        <div class="font-bold">Order Date</div>
                        <div >{{ orderData.createdDate }}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold">Order Number</div>
                        <div>{{ orderData.orderNumber }}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold">Payment Method</div>
                        <div>{{ orderData.paymentMethod }}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold">Address</div>
                        <div>{{ orderData.address }}</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div  class="grid grid-cols-4 gap-2 mb-4">
                    <div>
                        
                    </div>
                    <div class="text-center font-bold">
                        Product Name
                    </div>
                    <div class="text-center font-bold">
                        Amount
                    </div>
                    <div class="text-center font-bold">
                        Price
                    </div>
                </div>
                    <div v-for="product in orderData.products" :key="product.list" class="grid grid-cols-4 gap-2 my-4">
                        <div class="text-center">
                            <img class="w-full" :src="product.imageUrl">
                        </div>
                        <div class="text-center">
                            {{ product.name }}
                        </div>
                        <div class="text-center">
                            {{ product.quantity }}
                        </div>
                        <div class="text-center">
                            {{ (product.quantity * product.price).toLocaleString('th-TH') }} 
                        </div>
                    </div>
                <div class="divider"></div>
                    <div class="flex justify-between">
                        <div><b>Total Price</b></div>
                        <div>{{ (orderData.totalPrice ?? 0).toLocaleString('th-TH') }} Baht</div>
                    </div>
                <div class="divider"></div>
                <div class="flex justify-between">
                        <div><b>Deliery cost</b></div>
                        <div>0 Baht</div>
                    </div>
                <div class="divider"></div>
                <div class="flex justify-between">
                        <div><b>Total summary price</b></div>
                        <div>{{ (orderData.totalPrice ?? 0).toLocaleString('th-TH') }} Baht</div>
                    </div>
                <div class="mt-8 font-bold italic text-xl text-right text-shadow">Have a good day</div>
            </div>
            <div class="my-8">
                <RouterLink 
                    @click="clearCart()"
                    class="btn btn-neutral"
                    :to="{name: 'home'}">
                    Back to home
                </RouterLink>
            </div>
        </div>
    </navbar>
    
</template>