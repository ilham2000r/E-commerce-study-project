<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = reactive({
  email: '',
  password: ''
})

const isFormValid = computed(() => {
    return user.email && user.password && user.email.includes('@' && '.')
})


const login = () => {

    router.push({name: 'admin-index'})
}

</script>
<template>
    <div class="h-screen flex items-center">
        <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8 bg-violet-50 ">
            <div class="flex flex-col items-center">
                <h1 class="text-3xl">login View</h1>
                <div class="form-control w-full mt-4">
                    <label class="label">
                        <span class="label-text ">Email</span>
                    </label>
                    <input
                    type="email"
                    placeholder="Your email"
                    class="input input-bordered w-full"
                    v-model="user.email"
                    />
                </div>
                <div class="form-control w-full mt-4">
                    <label class="label">
                        <span class="label-text ">Password</span>
                    </label>
                    <input
                    v-model="user.password"
                    type="password"
                    placeholder="Your password"
                    class="input input-bordered w-full"
                    value=""/>
                </div>
                <button @click="login()" class="btn btn-neutral w-full mt-8 mb-1" :disabled="!isFormValid">Confirm</button>
                
            </div>
        </div>
    </div>
</template>