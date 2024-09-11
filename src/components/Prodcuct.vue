<script setup>
    import { defineProps } from 'vue' 

    defineProps({
        products: Array,
        addToCart: Function
    })
</script>

<template>
    <section class=" max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 p-20">
            <div v-for="product in products" :key="product.id" class="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img class="w-full" :src="product.imageUrl" />
                </figure>
                <div class="card-body ">
                    <h2 class="card-title">{{ product.name }}</h2>
                    <p>{{ product.price.toLocaleString('th-TH') }} Baht</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-neutral" @click="addToCart(product)">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
</template>