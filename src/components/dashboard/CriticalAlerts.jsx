import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import { MdPriorityHigh, MdArrowForward, MdCheck } from 'react-icons/md';
import alertsData from '../../data/alertsData.json';
import clsx from 'clsx';

const CriticalAlerts = () => {
    // No longer using accordion state, all items visible as per "list view" design inference from image 
    // where multiple actions like 'APPROVE' and 'APPLY' are visible simultaneously if expanded, 
    // OR more likely, the image shows a list of cards where each has its action visible.
    // The image shows "DENIM JACKET STOCKOUT" with a big white button "APPROVE 50 UNIT TRANSFER".
    // Below that "MARKDOWN ADVISORY" with "APPLY 20% DISCOUNT".
    // This implies a list of expanded cards.

    const badgeColors = {
        'URGENT': 'text-electric-red bg-electric-red/10 border border-electric-red/20',
        'PLANNING': 'text-deep-orange bg-deep-orange/10 border border-deep-orange/20',
        'STRATEGIC': 'text-lime-green bg-lime-green/10 border border-lime-green/20'
    };

    return (
        <GlassCard className="flex flex-col bg-bg-card transition-colors duration-300 h-full">
            <div className="p-4 bg-electric-red/5 border-b border-electric-red/10 flex items-center gap-2 shrink-0">
                <div className="size-4 rounded-full bg-electric-red/20 flex items-center justify-center">
                    <MdPriorityHigh className="text-electric-red text-[10px] font-bold" />
                </div>
                <span className="text-[10px] font-bold text-electric-red uppercase tracking-wider">CRITICAL ALERTS ({alertsData.length})</span>
            </div>

            <div className="flex-col px-5 text-text-primary flex-1 overflow-y-auto">
                {(alertsData || []).map((alert, index) => (
                    <div
                        key={alert.id}
                        className="py-4 border-b border-border-subtle last:border-0 flex flex-col gap-3 group"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-[11px] font-black uppercase tracking-wide text-text-primary leading-tight">
                                {alert.title}
                            </h3>
                            <span className={clsx("text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider", badgeColors[alert.badge])}>
                                {alert.badge}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="text-[10px] text-text-secondary leading-relaxed font-medium">
                            {alert.subtitle}
                            <div className="mt-1 text-text-tertiary">
                                {alert.message}
                            </div>
                        </div>

                        {/* Action Button */}
                        <button className={clsx(
                            "w-full py-2 rounded text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
                            alert.buttonStyle === 'primary'
                                ? "bg-text-primary text-bg-panel shadow-lg hover:opacity-90"
                                : "border border-border-base text-text-secondary hover:text-text-primary hover:border-text-primary bg-transparent"
                        )}>
                            {alert.action}
                        </button>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default CriticalAlerts;
