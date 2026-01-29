import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Persist login state (Simple storage for prototype)
    useEffect(() => {
        const storedUser = localStorage.getItem('arp_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        // Industry Standard: In a real app, this would be an API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'coutureai' && password === 'qwerty') {
                    // RBAC Foundation: Attaching role/permissions here
                    const userData = {
                        username,
                        role: 'admin',
                        name: 'Alex Chen',
                        title: 'Store Manager',
                        avatar: 'https://i.pravatar.cc/150?img=11',
                        permissions: ['view_dashboard', 'manage_inventory', 'approve_alerts']
                    };
                    setUser(userData);
                    localStorage.setItem('arp_user', JSON.stringify(userData));
                    resolve(userData);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 800); // Simulate network latency
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('arp_user');
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
