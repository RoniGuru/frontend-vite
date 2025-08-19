import { api } from './api';

api.interceptors.response.use(
  (response) => {
    // Check if server sent a new access token in response headers
    const newToken =
      response.headers['authorization'] || response.headers['Authorization'];

    if (newToken) {
      const token = newToken.split(' ')[1];
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('accessToken', token);
      }
    }
    return response;
  },
  (error) => {
    // Only logout on complete auth failures
    if (
      error.response?.status === 401 &&
      (error.response?.data.error === 'No refresh token provided' ||
        error.response?.data.error ===
          'Invalid refresh token. Please login again.')
    ) {
      localStorage.clear();
      api.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('accessToken');
      document.cookie =
        'refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    return Promise.reject(error);
  }
);
