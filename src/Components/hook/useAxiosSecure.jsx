// useAxiosSecure.js

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import useAuth from "./useCart/useAuth";

const useAxiosSecure = (baseUrl) => {
  const [axiosSecure,] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation
  const { logOut } = useAuth;

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    const instance = axios.create({
      baseURL: 'http://localhost:5000',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { status } = error.response;

        if (status === 401 || status === 403) {
          // Logout and navigate to login page
          await logOut();
          navigate("/login"); // Navigate to login page
        }

        return Promise.reject(error);
      }
    );


    return () => {
      // Cleanup axios instance
    };
  }, [baseUrl, logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
