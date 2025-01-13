<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-500">Reset your password</h2>
          <p class="mt-2 text-center text-sm text-gray-300">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleResetRequest">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                v-model="email"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email address">
            </div>
          </div>
  
          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Send reset link
            </button>
          </div>
        </form>
        <div class="text-center">
          <router-link to="/login" class="font-medium text-purple-500 hover:text-purple-400">
            Back to login
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import api from '../../plugins/axios';
  
  const email = ref('');
  
  const handleResetRequest = async () => {
    try {
      await api.post('/auth/reset-password-request', {
        email: email.value,
      });
  
      // Show success message to user
      alert('If an account with that email exists, we have sent a password reset link.');
    } catch (error) {
      console.error('Reset password request error:', error);
      // Handle error (e.g., show error message to user)
    }
  };
  </script>
  
  