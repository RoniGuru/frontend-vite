import type { ReactNode } from 'react';
import { useState } from 'react';
import { AuthContext } from './authContext';
import type { AuthContextType } from './authContext';
import { api } from '../../api/index';
import type { RootState, AppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from '../../state/user/userSlice';
import type { LoginResponseData } from './type';
import { AxiosError } from 'axios';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  // Single loading state for all auth operations
  const [isLoading, setIsLoading] = useState(false);

  async function login(
    username: string,
    password: string
  ): Promise<{ success: boolean; message: string }> {
    setIsLoading(true);
    try {
      const response = await api.post('/login', { username, password });

      if (response.status >= 200 && response.status < 300) {
        const data: LoginResponseData = response.data;
        if (!data.user) {
          return { success: false, message: 'no user given' };
        }
        dispatch(setUser(data.user));
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.accessToken}`;
        return { success: true, message: 'user logged in' };
      } else {
        return { success: false, message: 'login failed ' };
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log('Server error:', error.response.data);
          return {
            success: false,
            message: error.response.data.message || 'Server error occurred',
          };
        }
        if (error.request) {
          console.log('Network error:', error.message);
          return { success: false, message: 'Network error occurred' };
        }
      }

      if (error instanceof Error) {
        console.log('Error:', error.message);
        return { success: false, message: error.message };
      }

      return { success: false, message: 'An unknown error occurred' };
    } finally {
      setIsLoading(false);
    }
  }
  async function register(
    username: string,
    password: string
  ): Promise<{ success: boolean; message: string }> {
    setIsLoading(true);
    try {
      console.log('trying');
      const response = await api.post('/register', {
        username,
        password,
      });

      console.log(response);

      if (response.status === 200) {
        return { success: true, message: 'user registered' };
      }
      return { success: false, message: 'registration failed' };
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log('Server error:', error.response.data);
          return { success: false, message: error.response.data };
        }
        if (error.request) {
          console.log('Network error:', error.message);
          return { success: false, message: 'Network error occurred' };
        }
      }

      if (error instanceof Error) {
        console.log('Error:', error.message);

        return { success: false, message: error.message };
      }

      return { success: false, message: 'An unknown error occurred' };
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    if (user) {
      setIsLoading(true);
      try {
        const response = await api.post(`/logout/${user.id}`);
        console.log(response);

        if (response.status === 200) {
          dispatch(clearUser());
          api.defaults.headers.common['Authorization'] = '';
          //set refresh token to empty
          document.cookie =
            'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function get() {
    if (user) {
      setIsLoading(true);
      try {
        console.log(document.cookie);
        const response = await api.get(`/user/${user.id}`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  const value: AuthContextType = {
    logout,
    get,
    login,
    register,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
