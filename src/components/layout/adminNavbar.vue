<script setup>
import { ref,onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const menus = [
    {
        name: 'Dashboard',
        routeName: 'admin-dashboard'
    },
    {
        name: 'Product',
        routeName: 'admin-products-list'
    },
    {
        name: 'Order',
        routeName: 'admin-orders-list'
    }
]

const route = useRoute()
const activeMenu = ref('')

onMounted(() => {
    activeMenu.value = route.name
})

</script>

<template>
    <div>
        <div class="drawer drawer-open ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mx-4">
                <slot></slot>
                <!-- Page content here -->
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <li><RouterLink
                        :to="{name: 'admin-index'}" 
                        class="text-3xl font-bold">
                        Admin
                    </RouterLink></li>
                    <li v-for="menu in menus" :key="menu" >
                        <RouterLink 
                            :to="{name: menu.routeName}" 
                            :class="menu.routeName ===  activeMenu ? 'active' : '' " >
                            {{ menu.name }}
                    </RouterLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>