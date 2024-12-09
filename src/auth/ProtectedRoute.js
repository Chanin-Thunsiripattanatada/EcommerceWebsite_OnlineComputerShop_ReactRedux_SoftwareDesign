import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';// Adjust the import path as necessary
import { jwtDecode } from 'jwt-decode';

function ProtectedRoute({ children }) {
  const { token, userLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    if (!token) {
      // No token found, redirect to login
      navigate('/');
    } else {
      try {
        const decodedToken = jwtDecode(token); // Decode the token
        const currentTime = Date.now() / 1000; // Get the current time in seconds
        console.log(decodedToken.exp);

        if (decodedToken.exp < currentTime) {
          // Token has expired, redirect to login
          userLogout(); // Optionally remove the token from storage
          navigate('/');
        }
      } catch (error) {
        // If the token is invalid or decoding fails, redirect to login
        console.error('Invalid token:', error);
         // Remove invalid token
        userLogout();
        navigate('/');
      }
    }
  }, [navigate]);


  return children;
};

export default ProtectedRoute;
