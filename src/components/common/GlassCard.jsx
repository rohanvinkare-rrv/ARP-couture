import React from 'react';
import clsx from 'clsx';

const GlassCard = ({ children, className, ...props }) => {
    return (
        <div
            className={clsx(
                "glass-card bg-bg-card border-border-base rounded-md overflow-hidden",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default GlassCard;
