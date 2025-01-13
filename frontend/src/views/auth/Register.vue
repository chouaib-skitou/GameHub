<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-500">Create your account</h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input id="name" name="name" type="text" required
                v-model="name"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Full name">
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                v-model="email"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="new-password" required
                v-model="password"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Password">
            </div>
            <div>
              <label for="confirm-password" class="sr-only">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                v-model="confirmPassword"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password">
            </div>
          </div>
  
          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Sign up
            </button>
          </div>
        </form>
        <div class="text-center">
          <p class="text-sm text-gray-300">
            Already have an account?
            <router-link to="/login" class="font-medium text-purple-500 hover:text-purple-400">
              Sign in
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../../store/auth';
  import api from '../../plugins/axios';
  
  const router = useRouter();
  const authStore = useAuthStore();
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await api.post('/auth/register', {
        name: name.value,
        email: email.value,
        password: password.value,
      });
  
      const { user, accessToken, refreshToken } = response.data;
  
      // Set auth data in the store
      authStore.setAuthData(user, accessToken, refreshToken);
  
      // Redirect to home page or dashboard
      router.push('/');
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (e.g., show error message to user)
    }
  };
  </script>
  
  