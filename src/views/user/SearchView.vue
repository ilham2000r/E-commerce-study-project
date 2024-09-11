<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import navbar from '@/components/layout/navbar.vue'
import Product from '@/components/Prodcuct.vue'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const route = useRoute()
const router = useRouter()

const productStore = useProductStore()
const cartStore = useCartStore()

const searchText= ref('')


watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true}
)

const filterProducts = computed(() => {
    return productStore.filterProducts(searchText.value)
})
    
const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({ name: 'cart'})
}
</script>


<template>
    <navbar>
        <div class="max-w-screen-xl mx-auto pt-19">
            <div class="text-3xl m-4">Search: <b>{{ searchText }}</b> </div>
            <Product
                :products="filterProducts"
                :addToCart="addToCart"
            ></Product>
        </div>
    </navbar>
</template>