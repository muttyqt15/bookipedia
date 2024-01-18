"use client"
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { User, UserClientData } from "@/types/user";
import { loginUser } from "@/api/authActions";

interface AuthContextProps {
  isAuthenticated: boolean;
  isLoading: boolean; // New property to indicate loading state
  login: (data: UserClientData) => Promise<void>;
  logout: () => void;
  userData: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isLoading: true, // Initialize loading state
  login: async (data: UserClientData) => {},
  logout: () => {},
  userData: null,
});

export interface LoginResponse {
  user: User;
  token: string;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Check for authentication state in localStorage on component mount
    const storedUserData = localStorage.getItem("userData");
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");

    if (storedUserData && storedIsAuthenticated) {
      setUserData(JSON.parse(storedUserData));
      setIsAuthenticated(true);
    }

    setIsLoading(false); // Set loading state to false after checking authentication state
  }, []);

  const login = async (data: UserClientData) => {
    try {
      setIsLoading(true); // Set loading state to true during login process

      const loginRes: LoginResponse = await loginUser(data);
      setUserData(loginRes.user);
      setIsAuthenticated(true);

      // Save authentication state in localStorage
      localStorage.setItem("userData", JSON.stringify(loginRes.user));
      localStorage.setItem("token", loginRes.token);
      localStorage.setItem("isAuthenticated", "true");

      console.log(`Successful login! ${JSON.stringify(loginRes)}`);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false); // Set loading state to false after login process completes
    }
  };

  const logout = () => {
    // Clear authentication state in localStorage
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
