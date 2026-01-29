import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import GlassCard from '../components/common/GlassCard';
import { MdLock, MdPerson } from 'react-icons/md';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(formData.username, formData.password);
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-bg-app transition-colors duration-300 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-electric-red/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-lime-green/10 rounded-full blur-[120px]"></div>
            </div>

            <GlassCard className="w-full max-w-md p-8 relative z-10 bg-bg-panel/80 backdrop-blur-xl border border-border-base shadow-2xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="size-12 rounded-lg bg-text-primary p-2 flex items-center justify-center mb-4 shadow-lg">
                        <img src="/logo.png" alt="Couture Logo" className="size-full object-contain" />
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-tight text-text-primary">Couture Command</h1>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest mt-1">Agentic Retail Platform</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                        <div className="p-3 bg-electric-red/10 border border-electric-red/20 rounded text-[11px] font-bold text-electric-red text-center uppercase tracking-wide animate-pulse">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-text-primary transition-colors">
                                <MdPerson className="text-lg" />
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="w-full bg-bg-subtle border border-border-base rounded-md py-3 pl-10 pr-4 text-sm font-medium text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary focus:ring-1 focus:ring-text-primary transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-text-primary transition-colors">
                                <MdLock className="text-lg" />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full bg-bg-subtle border border-border-base rounded-md py-3 pl-10 pr-4 text-sm font-medium text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary focus:ring-1 focus:ring-text-primary transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-text-primary text-bg-panel py-3 rounded-md text-xs font-black uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <div className="size-4 border-2 border-bg-panel/30 border-t-bg-panel rounded-full animate-spin"></div>
                        ) : (
                            'Authenticate Access'
                        )}
                    </button>

                    <div className="text-center pt-2">
                        <span className="text-[10px] text-text-tertiary">Restricted System • Authorized Personnel Only</span>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};

export default Login;
