<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-purple-500">Set new password</h2>
          <p class="mt-2 text-center text-sm text-gray-300">
            Enter your new password below.
          </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleResetPassword">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="password" class="sr-only">New Password</label>
              <input id="password" name="password" type="password" autocomplete="new-password" required
                v-model="password"
                class="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="New password">
            </div>
            <div>
              <label for="confirm-password" class="sr-only">Confirm New Password</label>
              <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                v-model="confirmPassword"
                class="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Confirm new password">
            </div>
          </div>
  
          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Reset Password
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
  import { useRoute, useRouter } from 'vue-router';
  import api from '../../plugins/axios';
  
  const route = useRoute();
  const router = useRouter();
  
  const password = ref('');
  const confirmPassword = ref('');
  
  const handleResetPassword = async () => {
    if (password.value !== confirmPassword.value) {
      console.error('Passwords do not match');
      return;
    }
  
    const token = route.query.token as string;
  
    if (!token) {
      console.error('No reset token provided');
      return;
    }
  
    try {
      await api.post('/auth/reset-password', {
        token,
        password: password.value,
      });
  
      // Show success message and redirect to login
      alert('Your password has been successfully reset. Please log in with your new password.');
      router.push('/auth/login');
    } catch (error) {
      console.error('Password reset error:', error);
      // Handle error (e.g., show error message to user)
    }
  };
  </script>
  
  