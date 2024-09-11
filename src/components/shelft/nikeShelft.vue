<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    products: Array,
    addToCart: Function
});

const productBrand = 'nike'; 

const filteredProducts = computed(() => {
    return props.products.filter(product => product.brand === productBrand);
});
</script>

<template>
    <section class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 p-20">
        <div v-for="product in filteredProducts" :key="product.id" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img class="w-full" :src="product.imageUrl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.name }}</h2>
                <p>{{ product.price.toLocaleString('th-TH') }} Baht</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-neutral" @click="() => props.addToCart(product)">Add to cart</button>
                </div>
            </div>
        </div>
    </section>
</template>
