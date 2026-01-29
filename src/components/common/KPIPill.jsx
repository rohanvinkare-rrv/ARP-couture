import React from 'react';
import clsx from 'clsx';

const KPIPill = ({ label, value, change, trend = 'neutral' }) => {
    const trendColors = {
        up: 'text-lime-green',
        down: 'text-electric-red',
        neutral: 'text-text-secondary'
    };

    return (
        <div className="kpi-pill">
            <span className="text-[9px] font-bold text-text-secondary uppercase tracking-widest leading-none mb-1">
                {label}
            </span>
            <div className="flex items-baseline gap-2">
                <span className="text-xl font-mono font-bold text-text-primary">
                    {value}
                </span>
                <span className={clsx("text-[10px] font-bold", trendColors[trend])}>
                    {change}
                </span>
            </div>
        </div>
    );
};

export default KPIPill;
