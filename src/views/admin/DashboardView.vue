<script setup>
import adminNavbar from '@/components/layout/adminNavbar.vue'

const priceChart = {
    options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
    },
    series: [
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
}

const categoriesChart = {
    options: {
        chart: {
            type: 'donut'
        },
        labels: ['A', 'B', 'C', 'D', 'E']
    },
    series: [44, 55, 41, 17, 15]
}


</script>
<template>
    <adminNavbar>
        <div class="text-3xl font-bold my-4">Dash Board</div>
        <div class="stats shadow w-full mb-4">
            <div class="stat">
                <div class="stat-figure text-neutral">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-8 w-8 stroke-current">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="stat-title">Orders</div>
                <div class="stat-value">31K</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-neutral">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        fill="currentColor" 
                        class="bi bi-box2-fill" 
                        viewBox="0 0 16 16">
                        <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6z"/>
                    </svg>
                </div>
                <div class="stat-title">Products</div>
                <div class="stat-value">4,200</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-neutral">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        fill="currentColor" 
                        class="bi bi-people-fill" 
                        viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                    </svg>
                </div>
                <div class="stat-title">Users</div>
                <div class="stat-value">1,200</div>
            </div>
        </div>
        <div class="flex">
            <div class="flex-1 w-full h-64">
                <apexchart 
                type="bar" 
                :options="priceChart.options" 
                :series="priceChart.series">
            </apexchart>
            </div>
            <div class="flex-1 w-full h-64">
                <apexchart 
                type="donut" 
                :options="categoriesChart.options" 
                :series="categoriesChart.series">
            </apexchart>
            </div>
        </div>
    </adminNavbar>
</template>