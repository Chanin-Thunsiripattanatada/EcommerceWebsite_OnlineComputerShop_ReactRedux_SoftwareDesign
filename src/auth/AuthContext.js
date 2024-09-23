// src/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import http from '../http-common';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedCustomer = JSON.parse(localStorage.getItem('customer'));
    setUser(storedUser);
    setCustomer(storedCustomer);
    setToken(localStorage.getItem('token'));
  }, []);

  const userLogin = async (credentials) => {
    try {
      const response = await http.post('/auth', credentials);
      const { token, user, customer } = response.data;
      console.log(response.data);
      console.log(token);
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('customer', JSON.stringify(customer));
      localStorage.setItem('token', token);
      setUser(user);
      setToken(token);
      setCustomer(customer);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const userLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('customer');
    setUser(null);
    setToken(null);
    setCustomer(null)
  };

  const userIsAuthenticated = () => {
    return !!token;
  };

  const register = async (registrationUserDto) => {
    try {
      const response = await http.post('/registration', registrationUserDto);
      const { token, user, customer } = response.data; // Assuming this structure
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('customer', JSON.stringify(customer));
      localStorage.setItem('token', token);
      setUser(user);
      setToken(token);
      setCustomer(customer);
      return response.data; // Return response for further use
    } catch (error) {
      throw error; // Re-throw the error for the calling component to handle
    }
  };

  const contextValue = {
    user,
    customer,
    token,
    userIsAuthenticated,
    userLogin,
    userLogout,
    register
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthContext;
export function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider };
