import React from 'react';

const Footer = () => {
    return (
        <footer className="h-8 border-t border-border-base bg-bg-panel flex items-center justify-between px-6 shrink-0 transition-colors duration-300">
            <span className="text-[9px] text-text-tertiary">ARP v2.4.9 (Stable)</span>
            <div className="flex gap-4">
                <span className="text-[9px] text-text-tertiary hover:text-text-primary cursor-pointer transition-colors">Documentation</span>
                <span className="text-[9px] text-text-tertiary hover:text-text-primary cursor-pointer transition-colors">Support</span>
            </div>
        </footer>
    );
};

export default Footer;
