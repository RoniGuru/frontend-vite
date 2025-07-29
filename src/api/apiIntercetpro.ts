import { api } from './api';
import { store } from '../state/store';
import { clearUser } from '../state/user/userSlice';
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      (error.response?.data.error === 'No refresh token provided' ||
        error.response?.data.error ===
          'Invalid refresh token. Please login again.')
    ) {
      store.dispatch(clearUser());
      api.defaults.headers.common['Authorization'] = '';
      document.cookie =
        'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    return Promise.reject(error);
  }
);
