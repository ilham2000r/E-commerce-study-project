<script setup>
import { defineProps } from 'vue'

defineProps({
    headers: Array
})
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="header in headers" :key="header">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <!-- main content -->
            <slot></slot>
        </tbody>
    </table>
</template>