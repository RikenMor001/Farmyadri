import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, getCurrentUser, isAuthenticated, saveUserData } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on app load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        if (isAuthenticated()) {
          const currentUser = getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
          } else {
            // Token exists but no user data, try to get profile
            try {
              const response = await authAPI.getProfile();
              setUser(response.user);
            } catch (error) {
              console.error('Failed to get user profile:', error);
              // Clear invalid token
              authAPI.logout();
            }
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        authAPI.logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Sign up function
  const signup = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await authAPI.signup(userData);
      
      // Save user data and token
      saveUserData(response.user, response.token);
      setUser(response.user);
      
      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signin = async (credentials) => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await authAPI.signin(credentials);
      
      // Save user data and token
      saveUserData(response.user, response.token);
      setUser(response.user);
      
      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    authAPI.logout();
    setUser(null);
    setError(null);
  };

  // Update user profile
  const updateProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    signup,
    signin,
    logout,
    updateProfile,
    clearError,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
