<script setup>
import { useAdminOrderStore } from '@/stores/admin/order'
import adminNavbar from '@/components/layout/adminNavbar.vue'
import Table2 from '@/components/Table2.vue'

const adminOrderStore = useAdminOrderStore()
</script>
<template>
    <adminNavbar>
        <div class="flex item-center justify-between my-6">
            <div class="text-3xl font-bold">
                Order
            </div>
        </div>
        <table2 :headers="['Order No.','Customer Name', 'Price', 'Status', 'Updated At', '']">
            <tr v-for="(order, index) in adminOrderStore.list" :key="order">
                <td>{{ order.no }}</td>
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice.toLocaleString('th-TH') }}</td>
                <td>{{ order.paymentStatus }}</td>
                <td>{{ order.updatedAt }}</td>
                <td>
                    <RouterLink
                        :to="{name: 'admin-orders-detail', params: {id: index}}"
                        class="btn">
                        SEE DETAIL
                    </RouterLink>
                </td>
            </tr>
        </table2>
    </adminNavbar>
</template>