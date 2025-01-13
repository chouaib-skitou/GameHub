<template>
<footer class="bg-gray-900 py-8">
    <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center mb-4 md:mb-0">
        <Gamepad2 class="w-6 h-6 text-purple-500 mr-2" />
        <span class="text-xl font-bold">GameHub</span>
        </div>
        <div class="flex space-x-4">
        <a
            href="#"
            v-for="icon in socialIcons"
            :key="icon.name"
            class="text-gray-400 hover:text-white transition-colors"
        >
            <component :is="icon" class="w-6 h-6" />
        </a>
        </div>
    </div>
    <div class="mt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} GameHub. All rights reserved.</p>
    </div>
    </div>
</footer>
</template>

<script setup lang="ts">
import { Gamepad2, TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-vue-next'

const socialIcons = [TwitterIcon, FacebookIcon, InstagramIcon]
</script>