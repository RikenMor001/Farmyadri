const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Helper function to check if backend is accessible
const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/api/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};

// ==================== AUTHENTICATION API ====================

export const authAPI = {
  // User registration
  signup: async (userData) => {
    try {
      // Check if backend is accessible
      const isBackendHealthy = await checkBackendHealth();
      if (!isBackendHealthy) {
        throw new Error('Backend server is not accessible. Please make sure the server is running on port 3000.');
      }

      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // User login
  signin: async (credentials) => {
    try {
      // Check if backend is accessible
      const isBackendHealthy = await checkBackendHealth();
      if (!isBackendHealthy) {
        throw new Error('Backend server is not accessible. Please make sure the server is running on port 3000.');
      }

      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Get user profile
  getProfile: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Logout (clear local storage)
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

// ==================== ACCOMMODATION API ====================

export const accommodationAPI = {
  // Get all accommodations with optional filters
  getAll: async (filters = {}) => {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters.type) queryParams.append('type', filters.type);
      if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
      if (filters.guests) queryParams.append('guests', filters.guests);
      if (filters.available !== undefined) queryParams.append('available', filters.available);

      const url = `${API_BASE_URL}/accommodations${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Get accommodation by ID
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/accommodations/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Check availability for specific dates
  checkAvailability: async (id, checkIn, checkOut) => {
    try {
      const response = await fetch(`${API_BASE_URL}/accommodations/${id}/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ checkIn, checkOut }),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  }
};

// ==================== BOOKING API ====================

export const bookingAPI = {
  // Create a new booking
  create: async (bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(bookingData),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Get user's bookings
  getUserBookings: async (status = null) => {
    try {
      const url = status 
        ? `${API_BASE_URL}/bookings?status=${status}`
        : `${API_BASE_URL}/bookings`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Get specific booking by ID
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Cancel a booking
  cancel: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/cancel`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  }
};

// ==================== PAYMENT API ====================

export const paymentAPI = {
  // Process payment
  process: async (paymentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/payments`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(paymentData),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  },

  // Get payment details
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/payments/${id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to the server. Please check if the backend is running on port 3000.');
      }
      throw error;
    }
  }
};

// ==================== UTILITY FUNCTIONS ====================

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

// Get current user from localStorage
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Save user data to localStorage
export const saveUserData = (userData, token) => {
  localStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('token', token);
};

// Format price for display
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Calculate total booking amount
export const calculateTotalAmount = (basePrice, nights) => {
  const baseAmount = basePrice * nights;
  const serviceFee = Math.round(baseAmount * 0.1); // 10% service fee
  const taxes = Math.round(baseAmount * 0.18); // 18% taxes
  return baseAmount + serviceFee + taxes;
};

// Format date for API
export const formatDateForAPI = (date) => {
  return date.toISOString().split('T')[0];
};

// Parse date from API
export const parseDateFromAPI = (dateString) => {
  return new Date(dateString);
};

export default {
  auth: authAPI,
  accommodation: accommodationAPI,
  booking: bookingAPI,
  payment: paymentAPI,
  utils: {
    isAuthenticated,
    getCurrentUser,
    saveUserData,
    formatPrice,
    calculateTotalAmount,
    formatDateForAPI,
    parseDateFromAPI
  }
};
