<script setup>
import navbar from '@/components/layout/navbar.vue'
import adidasShelft from '@/components/shelft/adidasShelft.vue'
import nikeShelft from '@/components/shelft/nikeShelft.vue'
import pumaShelft from '@/components/shelft/pumaShelft.vue'
import newBalanceShelft from '@/components/shelft/newBalanceShelft.vue'
import filaShelft from '@/components/shelft/filaShelft.vue'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'
import NikeShelft from '@/components/shelft/nikeShelft.vue'
import NewBalanceShelft from '@/components/shelft/newBalanceShelft.vue'
import FilaShelft from '@/components/shelft/filaShelft.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
    cartStore.addToCart(product)
    // router.push({ name: 'cart' })
};
</script>

<template>
    <navbar>
        <div class="max-w-screen-xl mx-auto pt-19">
            <div> <!-- Corousel-->
                <div class="w-full grid grid-cols-1">
                    <div class="w-full h-96 overflow-hidden">
                        <img
                        src="https://images.pexels.com/photos/6509353/pexels-photo-6509353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="object-cover object-bottom w-full h-full" />
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
            <div> <!-- Product shelft-->
                <div> 
                    <section id="adidas" class="text-2xl font-bold m-4">
                        Adidas
                    </section>
                    <adidasShelft
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div> 
                    <section id="nike" class="text-2xl font-bold m-4">
                        Nike
                    </section>
                    <nikeShelft
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div> 
                    <section id="puma" class="text-2xl font-bold m-4">
                        PUMA
                    </section>
                    <pumaShelft
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div> 
                    <section id="newBalacne" class="text-2xl font-bold m-4">
                        New Balance
                    </section>
                    <newBalanceShelft
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
                <div> 
                    <section id="fila" class="text-2xl font-bold m-4">
                        FILA
                    </section>
                    <filaShelft
                        :products="productStore.list"
                        :addToCart="addToCart"
                    />
                </div>
            </div>
        </div>
    </navbar>
</template>