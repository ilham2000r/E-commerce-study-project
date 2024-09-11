<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import navbar from "@/components/layout/navbar.vue"

import { useRouter, RouterLink } from 'vue-router'
import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'
import NewProduct from '@/components/NewProduct.vue'
import BestProduct from '@/components/BestProduct.vue'
import SaleProduct from '@/components/SaleProduct.vue'


const adidas = ref(new URL('@/assets/img/adidas.png', import.meta.url).href)
const nike = ref(new URL('@/assets/img/nike.png', import.meta.url).href)
const puma = ref(new URL('@/assets/img/puma.png', import.meta.url).href)
const newBalance = ref(new URL('@/assets/img/newBalance.png', import.meta.url).href)
const fila = ref(new URL('@/assets/img/fila.png', import.meta.url).href)

const productStore = useProductStore()
const cartStore = useCartStore()
const router = useRouter()

const addToCart = (product) => {
    cartStore.addToCart(product)
    // router.push({ name: 'cart' })
};

const images = [
  'https://via.placeholder.com/400x200?text=Slide+1',
  'https://via.placeholder.com/400x200?text=Slide+2',
  'https://via.placeholder.com/400x200?text=Slide+3',
];

const currentSlide = ref(0)
const slideInterval = ref(null)

const startAutoSlide = () => {
  slideInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.length
  }, 3000); // เปลี่ยนสไลด์ทุกๆ 3 วินาที
};

const stopAutoSlide = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
};

onMounted(() => {
  startAutoSlide()
});

onUnmounted(() => {
  stopAutoSlide()
});
</script>

<template>
    <div>
        
    </div>
    <navbar>
        <div class="max-w-screen-xl mx-auto pt-19">
            <div> <!-- Corousel-->
                <div class="w-full grid grid-cols-1">
                    <div class="w-full h-96 overflow-hidden">
                        <img
                        src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="object-cover object-middle w-full h-full" />
                    </div>
                </div>
                <div class="w-full grid grid-cols-1 pb-14 pt-2">
                    <div class="text-6xl font-bold items-center my-8 mx-auto">
                        “Sole mates for every journey.”
                    </div>
                    <div class="text-3xl font-semibold items-center mx-auto"> 
                        We are ready to give you good sole mates.
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div> <!-- Product Shleft-->
                <div> <!-- New Arrivals Card -->
                    <div class="text-2xl font-bold m-4">
                        New Arrivals
                    </div>
                    <NewProduct
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div class="divider"></div>
                <div> <!-- New Arrivals Card -->
                    <div class="text-2xl font-bold m-4">
                        Best Seller
                    </div>
                    <BestProduct
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div class="divider"></div>
                <div> <!-- New Arrivals Card -->
                    <div class="text-2xl font-bold m-4">
                        Sale
                    </div>
                    <SaleProduct
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div class="divider"></div>
                <div class="grid grid-cols-6 gap-4 m-10 items-center justify-items-center"> <!-- Product with brand -->
                    <div>
                        <RouterLink :to="{name: 'shelft'}">
                            <img :src="adidas" class="h-16">
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink :to="{name: 'shelft'}">
                            <img :src="nike" class="h-16">
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink :to="{name: 'shelft'}">
                            <img :src="puma" class="h-16">
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink :to="{name: 'shelft'}">
                            <img :src="newBalance" class="h-24">
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink :to="{name: 'shelft'}">
                            <img :src="fila" class="h-24">
                        </RouterLink>
                    </div>
                    <div class="card text-center bg-base-100 w-44 shadow-xl transition-colors duration-300 hover:bg-neutral hover:text-slate-50">
                        <RouterLink
                            :to="{name : 'shelft'}">
                            <figure>
                            <img src="">
                        </figure>
                        <div class="card-body flex items-center justify-center ">
                            <div>
                                <h2 class="card-title w-full ">All Products</h2>
                            </div>
                        </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </navbar>
</template>


