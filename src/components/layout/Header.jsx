import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { MdLightMode, MdDarkMode, MdLogout } from 'react-icons/md';
import kpiData from '../../data/kpiData.json';
import KPIPill from '../common/KPIPill';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { logout } = useAuth();

    return (
        <header className="sticky top-0 z-40 bg-bg-panel/80 backdrop-blur-md border-b border-border-base flex items-center justify-between px-6 h-20 shrink-0 transition-colors duration-300">
            <div className="flex items-center h-full">
                {kpiData.map((kpi, index) => (
                    <KPIPill key={index} {...kpi} />
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex flex-col text-right items-end">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-green"></span>
                        </span>
                        <span className="text-[10px] font-bold text-lime-green uppercase tracking-wider">Live: Stable</span>
                    </div>
                    <span className="text-[9px] text-text-secondary font-mono">Synced: 08:42:11</span>
                </div>

                <div className="flex items-center gap-2 border-l border-border-subtle pl-4">
                    <button
                        onClick={toggleTheme}
                        className="bg-bg-hover text-text-primary size-8 rounded flex items-center justify-center hover:bg-bg-active hover:text-text-inverse transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <MdLightMode className="text-lg" />
                        ) : (
                            <MdDarkMode className="text-lg" />
                        )}
                    </button>

                    <button
                        onClick={logout}
                        className="bg-bg-hover text-text-secondary size-8 rounded flex items-center justify-center hover:bg-electric-red hover:text-white transition-colors"
                        aria-label="Logout"
                        title="Logout"
                    >
                        <MdLogout className="text-lg" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
