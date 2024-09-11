<script setup>
import { reactive, onMounted, ref } from 'vue'
import adminNavbar from '@/components/layout/adminNavbar.vue'
import { useRouter, useRoute } from 'vue-router';
import { useAdminProductStore } from '@/stores/admin/product';


const router = useRouter()
const route = useRoute()
const adminProductStore = useAdminProductStore()

const productIndex = ref(-1)
const mode = ref('ADD')

const productData = reactive ({
    name: '',
    imageUrl: '',
    price: '',
    size: '',
    brand: '',
    quantity: '',
    status: ''
})

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'imageUrl'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Size',
        field: 'size'
    },
    {
        name: 'Brand',
        field: 'brand'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    }
]

onMounted (() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = 'EDIT'

        const selectedProduct = adminProductStore.getProduct(productIndex.value)
        
        productData.name = selectedProduct.name 
        productData.price = selectedProduct.price 
        productData.imageUrl = selectedProduct.imageUrl 
        productData.quantity = selectedProduct.quantity
        productData.remainQuantity = selectedProduct.remainQuantity   
        productData.about = selectedProduct.about 
        productData.status = selectedProduct.status 
    }
})

const updateProduct = () => {
    if (mode.value === 'EDIT') {
        adminProductStore.updateProduct(productIndex.value, productData)
    } else {
        adminProductStore.addProduct(productData)
    }
    router.push({ name: 'admin-products-list' })
}

</script>
<template>
    <adminNavbar>
        <div class="shadow-xl my-4">
            <div class="text-3xl font-bold">{{ mode }} Product</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <label v-for="form in formData" :key="form.list" class="form-control w-full ">
                    <div class="label">
                        <span class="label-text"><b>{{ form.name }}</b></span>
                    </div>
                    <input 
                        type="text" 
                        v-model="productData[form.field]" 
                        placeholder="Type here" 
                        class="input input-bordered w-full" />
                </label>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <label class="form-control w-full ">
                    <div class="label">
                        <span class="label-text"><b>Status</b></span>
                    </div>
                    <select 
                        v-model="productData.status"
                        class="select select-bordered">
                        <option >Normal</option>
                        <option value="newArrival">New Arrival</option>
                        <option value="bestSell">Best Seller</option>
                        <option value="sale">Sale</option>
                    </select>
                </label>
            </div>
            <div class="flex justify-end mt-4">
                <button class="btn btn-ghost mx-4 px-4">Back</button>
                <button class="btn btn-error mx-4 px-4">Clear</button>
                <button class="btn btn-neutral mx-4 px-4" @click="updateProduct()">{{ mode }}</button>
            </div>
        </div>
    </adminNavbar>
</template>