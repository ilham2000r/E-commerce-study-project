<script setup>
import adminNavbar from '@/components/layout/adminNavbar.vue'
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import { useAdminOrderStore } from '@/stores/admin/order'

const orderIndex = ref(-1)
const orderData = ref({
        product: []
})
const route = useRoute()
const adminOrderStore = useAdminOrderStore()

onMounted (() => {
    if (route.params.id) {
        orderIndex.value = parseInt(route.params.id)
        const selectedOrder = adminOrderStore.getOrder(orderIndex.value)
        orderData.value = selectedOrder
    }
    console.log(orderData.totalPrice);
    
})

</script>

<!-- no: 'A112234',
    customerName: 'นายทดสอบ นะ',
    totalPrice: '25,000',
    paymentStatus: 'Payment Completed',
    address: '111/892 Nonthaburi Thailand 99999',
    paymentMethod: 'Credit card',
    updatedAt: '9/15/2023, 11:50:24 PM',
    products:  -->

<template>
    <adminNavbar>
        <div class="shadow-xl p-8">
            <div class="text-3xl font-bold">Oreder Detail ID: {{ orderIndex }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">Order date</div>
                    <div>{{ orderData.updatedAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order Number</div>
                    <div>{{ orderData.no }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" :key="product.list" class="grid grid-cols-4 ">
                <div>
                    <img  class="p-2 w-25 " :src="product.imageUrl" >
                </div>
                <div>
                    <div class="font-bold mt-4">{{ product.name }}</div>
                </div>
                <div class="mt-4">
                    Size {{ product.size }} US
                </div>
                <div class="text-right mt-4">
                    {{ product.price.toLocaleString('th-TH') }} Baht
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between ">
                <div class="font-bold">Total Price</div>
                <div class="">{{ orderData.totalPrice ? orderData.totalPrice.toLocaleString('th-TH') : 'N/A'  }}</div> <!-- ที่ต้องเช็คเงื่อนไขเพราะมัน undefinded -->
            </div>
            <div class="flex justify-end">
                <RouterLink
                    :to="{name:'admin-orders-list'}" 
                    class="btn my-4">
                    Back
                </RouterLink>
            </div>
        </div>
    </adminNavbar>
</template>