import React, { useState } from 'react';
import {
    MdDashboard,
    MdInventory2,
    MdPayments,
    MdGroups,
    MdEmergency,
    MdAutoAwesome,
} from 'react-icons/md';
import clsx from 'clsx';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Global Pulse');
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navItems = {
        main: [
            { label: 'Global Pulse', icon: MdDashboard },
            { label: 'Inventory Velocity', icon: MdInventory2 },
            { label: 'Margin Control', icon: MdPayments },
            { label: 'Regional Benchmarks', icon: MdGroups },
        ],
        analytics: [
            { label: 'Critical Alerts', icon: MdEmergency, badge: 3, badgeColor: 'bg-electric-red' },
            { label: 'Predictive Actions', icon: MdAutoAwesome },
        ],
    };

    return (
        <aside className={clsx(
            "border-r border-border-base flex flex-col h-screen shrink-0 bg-bg-panel flex-none transition-all duration-300 ease-in-out relative group",
            isCollapsed ? "w-20" : "w-64"
        )}>
            {/* Header */}
            <div className={clsx("p-6 border-b border-border-base flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-text-primary p-1.5 flex items-center justify-center shrink-0">
                        <img src="/logo.png" alt="Couture Logo" className="size-full object-contain" />
                    </div>
                    {!isCollapsed && (
                        <div className="overflow-hidden whitespace-nowrap">
                            <h1 className="text-sm font-extrabold uppercase tracking-tight text-text-primary leading-none">Couture</h1>
                            <span className="text-[10px] font-bold text-text-secondary camelCase tracking-widest">Agentic Retail Platform</span>
                        </div>
                    )}
                </div>

                {/* Collapse Toggle - Visible on hover or when expanded */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-8 bg-bg-card border border-border-base rounded-full p-1 text-text-secondary hover:text-text-primary shadow-md transition-colors z-50 flex items-center justify-center cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                        {isCollapsed ? (
                            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        ) : (
                            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        )}
                    </svg>
                </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto overflow-x-hidden">
                {!isCollapsed && <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-[0.2em] mb-4 px-3 whitespace-nowrap">Main Operations</div>}

                {navItems.main.map((item) => (
                    <div
                        key={item.label}
                        className={clsx(
                            "sidebar-item transition-all duration-200",
                            activeItem === item.label && 'active',
                            isCollapsed ? "justify-center px-0 py-3" : "px-3 py-2"
                        )}
                        onClick={() => setActiveItem(item.label)}
                        title={isCollapsed ? item.label : undefined}
                    >
                        <item.icon className="text-lg shrink-0" />
                        {!isCollapsed && <span className="text-xs font-medium tracking-wide whitespace-nowrap ml-3">{item.label}</span>}
                    </div>
                ))}

                {!isCollapsed && <div className="text-[10px] font-bold text-text-tertiary uppercase tracking-[0.2em] mb-4 px-3 mt-8 whitespace-nowrap">Intelligence</div>}
                {isCollapsed && <div className="h-8"></div> /* Spacer for collapsed mode separation */}

                {navItems.analytics.map((item) => (
                    <div
                        key={item.label}
                        className={clsx(
                            "sidebar-item transition-all duration-200",
                            activeItem === item.label && 'active',
                            isCollapsed ? "justify-center px-0 py-3 relative" : "px-3 py-2"
                        )}
                        onClick={() => setActiveItem(item.label)}
                        title={isCollapsed ? item.label : undefined}
                    >
                        <item.icon className="text-lg shrink-0" />
                        {!isCollapsed && <span className="text-xs font-medium tracking-wide whitespace-nowrap ml-3">{item.label}</span>}

                        {item.badge && (
                            <span className={clsx(
                                "rounded-full text-white flex items-center justify-center",
                                item.badgeColor,
                                isCollapsed ? "absolute top-1 right-1 size-2 text-[0px]" : "ml-auto text-[10px] px-1.5"
                            )}>
                                {!isCollapsed && item.badge}
                            </span>
                        )}
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-border-base bg-bg-hover">
                <div className={clsx("flex items-center gap-3 rounded-lg hover:bg-bg-hover transition-colors cursor-pointer", isCollapsed ? "justify-center p-0" : "px-3 py-2")}>
                    <div className="size-8 rounded bg-bg-subtle bg-center bg-cover grayscale shrink-0"
                        style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=11)' }}
                        title={isCollapsed ? "Alex Chen - Store Manager" : undefined}
                    ></div>
                    {!isCollapsed && (
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-xs font-bold text-text-primary whitespace-nowrap">Alex Chen</span>
                            <span className="text-[10px] text-text-secondary whitespace-nowrap">Store Manager</span>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
