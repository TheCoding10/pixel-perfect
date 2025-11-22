import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<User>;
  signup: (username: string, email: string, password: string) => Promise<User>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    
    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    // Mock login - in real app this would call /api/auth/login
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find((u: any) => u.email === email && u.password === password);
        
        if (foundUser) {
          const mockToken = 'mock-token-' + Date.now();
          const userData = { id: foundUser.id, username: foundUser.username, email: foundUser.email };
          
          localStorage.setItem('authToken', mockToken);
          localStorage.setItem('authUser', JSON.stringify(userData));
          
          setUser(userData);
          setToken(mockToken);
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          setError('Invalid email or password');
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  }, []);

  const signup = useCallback(async (username: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    // Mock signup - in real app this would call /api/auth/signup
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find((u: any) => u.email === email);
        
        if (existingUser) {
          setLoading(false);
          setError('Email already exists');
          reject(new Error('Email already exists'));
          return;
        }
        
        const newUser = {
          id: Date.now(),
          username,
          email,
          password // In real app, never store plain password
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        const mockToken = 'mock-token-' + Date.now();
        const userData = { id: newUser.id, username: newUser.username, email: newUser.email };
        
        localStorage.setItem('authToken', mockToken);
        localStorage.setItem('authUser', JSON.stringify(userData));
        
        setUser(userData);
        setToken(mockToken);
        setLoading(false);
        resolve(userData);
      }, 500);
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setUser(null);
    setToken(null);
  }, []);

  const value = {
    user,
    token,
    loading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
