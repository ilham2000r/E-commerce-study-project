<script setup>
import { ref } from 'vue'
import { RouterLink,useRouter } from 'vue-router'
import { useCartStore } from '@/stores/user/cart'

import magnifyGlass from '../icons/magnifyGlass.vue'
import home from '../icons/home.vue'
import AdidasLogo from '../icons/brandLogo/adidasLogo.vue'
import NikeLogo from '../icons/brandLogo/nikeLogo.vue'
import PumaLogo from '../icons/brandLogo/pumaLogo.vue'
import NewBalanceLogo from '../icons/brandLogo/newBalanceLogo.vue'
import FilaLogo from '../icons/brandLogo/filaLogo.vue'

const router = useRouter();

const isOpen = ref(false); // สถานะการเปิด/ปิดของ drawer
const searchText = ref('')
const cartStore = useCartStore()

const closeDrawer = () => {
      isOpen.value = false; // ปิด drawer เมื่อกดเมนู
    };


const products = [
        { 
            name: 'Nike', 
            brand: 'nike',
            routePath: 'search/nike' 
        },
        { 
            name: 'Adidas', 
            brand: 'adidas',
            routePath: 'search/adidas' 
        },
        { 
            name: 'Puma', 
            brand: 'puma',
            routePath: 'search/puma'  
        },
        { 
            name: 'New balance', 
            brand: 'newBalance',
            routePath: 'search/newBalance'  
        },
        { 
            name: 'FILA', 
            brand: 'fila',
            routePath: 'search/fila'  
        }
      ]

const handleSearch = (event) => {
    if (event.key === 'Enter') {
        router.push ({
            name: 'search',
            query: {
                q: searchText.value
            }
        })
        
    }  
}

</script>

<template>
    <div>
        <div class="mx-auto">
            <div class="navbar bg-base-100 drop-shadow-xl"> <!-- Navbar-->
                <div class="flex w-full ">
                    <div class="flex flex-1 ml-4 items-center">
                        <RouterLink  
                            :to="{name: 'home'}"
                            class="btn btn-ghost text-2xl ">
                            <home class="mr-2"></home>
                            Urban Steps
                        </RouterLink>
                    </div>
                    <div class="flex flex-1 justify-center items-center mr-20">
                        <div class="flex items-center space-x-4">
                            <RouterLink :to="{name:'shelft'}">
                                <AdidasLogo class="m-2"></AdidasLogo>
                            </RouterLink>
                            <div class="flex items-center">
                                <div class="divider divider-horizontal h-8 align-middle"></div>
                            </div>
                            <RouterLink :to="{name:'shelft'}">
                                <NikeLogo class="m-2"></NikeLogo>
                            </RouterLink>
                            <div class="flex items-center">
                                <div class="divider divider-horizontal h-8 align-middle"></div>
                            </div>
                            <RouterLink :to="{name:'shelft'}">
                                <PumaLogo class="m-2"></PumaLogo>
                            </RouterLink>
                            <div class="flex items-center">
                                <div class="divider divider-horizontal h-8 align-middle"></div>
                            </div>
                            <RouterLink :to="{name:'shelft'}">
                                <NewBalanceLogo class="m-2"></NewBalanceLogo>
                            </RouterLink>
                            <div class="flex items-center">
                                <div class="divider divider-horizontal h-8 align-middle"></div>
                            </div>
                            <RouterLink :to="{name:'shelft'}">
                                <FilaLogo class="m-2"></FilaLogo>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span class="badge badge-sm indicator-item">{{ cartStore.summaryQuantity }}</span>
                            </div>
                        </div>
                        <div
                            tabindex="0"
                            class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div class="card-body">
                                <span class="text-lg font-bold">{{ cartStore.summaryQuantity }} items</span>
                                <span class="text-info">Subtotal: {{ cartStore.summaryPrice.toLocaleString('th-TH') }} Baht</span>
                                <div class="card-actions">
                                    <RouterLink :to="{name: 'cart'}" class="btn btn-neutral btn-block">View cart</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-control mx-4 w-1/4">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            class="input input-bordered w-24 md:w-auto" 
                            v-model="searchText"
                            @keyup.enter="handleSearch"
                            />
                    </div>
                </div>
                <div class="mr-4 ">
                    <magnifyGlass></magnifyGlass>
                </div>
            </div>
        </div>
    </div>
    

     <slot></slot>
   
    <footer class="footer bg-neutral text-neutral-content p-10">
        <nav>
            <h6 class="footer-title">Services</h6>
            <a class="link link-hover">Branding</a>
            <a class="link link-hover">Design</a>
            <a class="link link-hover">Marketing</a>
            <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 class="footer-title">Company</h6>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 class="footer-title">Legal</h6>
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
            <a class="link link-hover">Cookie policy</a>
        </nav>
    </footer>
</template>

