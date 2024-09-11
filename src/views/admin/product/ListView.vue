<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useAdminProductStore } from '@/stores/admin/product'
import adminNavbar from '@/components/layout/adminNavbar.vue'

import edit from '@/components/icons/edit.vue'
import trash from '@/components/icons/trash.vue'
import table2 from '@/components/Table2.vue'

onMounted (() => {
    adminProductStore.loadProduct()
})

const removeProducts = (index) => {
    adminProductStore.removeProduct(index)
}

const adminProductStore = useAdminProductStore()

const products = ref([
    {
        name: 'test',
        imageUrl: 'https://picsum.photos/200',
        price: 200,
        size: 10,
        brand: 'nike',
        status: 'newArrival',
        quantity: 20,
        remainQuantity: 11,
        updatedAt: (new Date()).toISOString()
    }
])
</script>

<template>
    <adminNavbar>
        <div class="flex item-center justify-between my-4">
            <div class="text-3xl font-bold">
                Product
            </div>
            <div>
                <RouterLink
                    :to="{name: 'admin-products-create'}"
                    class="btn btn-neutral rounded-lg ">
                    Add new product
                </RouterLink>
            </div>
        </div>
        <table2
            :headers="['Id','Name','Image','Price','Size','Brand','Quantity','Status','Updated At','']">
        <!-- row 1 -->
            <tr v-for="(product, index) in adminProductStore.list" :key="product" class="bg-base-200 rounded-xl">
                <td>{{ index+1 }}</td>
                <td>{{ product.name }}</td>
                <td> <img :src="product.imageUrl" class="w-10 " > </td>
                <td>{{ product.price.toLocaleString('th-TH') }}</td>
                <td>{{ product.size }}</td>
                <td>{{ product.brand }}</td>
                <td>{{ product.remainQuantity }} / {{ product.quantity }}</td>
                <td>{{ product.status }}</td>
                <td>{{ new Date(product.updatedAt).toLocaleString('en-GB', 
                    {
                        timeZone: 'Asia/Bangkok',
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        timeZoneName: 'short'
                    }) 
                }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink
                            :to="{name:'admin-products-update', params: {id: index}}"  
                            class="btn btn-ghost rounded-md">
                            <edit></edit>
                        </RouterLink>
                        <div
                            @click="removeProducts(index)" 
                            class="btn btn-ghost rounded-md" >
                            <trash></trash>
                        </div>
                    </div>
                </td>
            </tr>
        </table2>
    </adminNavbar>
</template>