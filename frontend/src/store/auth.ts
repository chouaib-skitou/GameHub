import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    accessToken: null as string | null,
    refreshToken: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
    getAccessToken: (state) => state.accessToken,
  },
  actions: {
    setAuthData(user: any, accessToken: string, refreshToken: string) {
      this.user = user;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    },
    async refreshAuthToken() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/refresh`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.refreshToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to refresh token');
        }

        const data = await response.json();
        this.accessToken = data.accessToken;

        localStorage.setItem('accessToken', data.accessToken);
      } catch (error) {
        console.error('Token refresh failed:', error);
        this.clearAuthData();
      }
    },
    clearAuthData() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;

      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    logout() {
      this.clearAuthData();
    },
  },
});

