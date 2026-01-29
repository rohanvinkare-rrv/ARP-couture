import React from 'react';
import GlassCard from '../common/GlassCard';

const StrategicOverview = () => {
    return (
        <GlassCard className="p-6 flex flex-col justify-between bg-bg-card transition-colors duration-300">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-sm font-bold text-text-primary flex items-center gap-2">
                        <span className="size-2 rounded-full bg-lime-green animate-pulse"></span>
                        Strategic Overview
                    </h2>
                    <span className="text-[9px] font-mono text-text-tertiary">Q4-2025</span>
                </div>
                <div className="flex gap-8">
                    <p className="text-[11px] text-text-secondary max-w-xl">
                        Revenue pacing exceeds targets. High friction detected in <span className="text-text-primary font-semibold">Technical Footwear</span> due to logistic delays. Regional demand is shifting toward accessories.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border-base">
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-[10px] font-bold text-text-tertiary">PRIMARY DRIVER</span>
                        <span className="text-[10px] font-bold text-text-primary">80%</span>
                    </div>
                    <p className="text-xs font-semibold text-text-primary">Technical Gear Peak</p>
                    <div className="h-1 w-full bg-bg-subtle rounded-full mt-2">
                        <div className="h-full bg-lime-green w-4/5 rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-[10px] font-bold text-text-tertiary">RISK FACTOR</span>
                        <span className="text-[10px] font-bold text-text-primary">50%</span>
                    </div>
                    <p className="text-xs font-semibold text-text-primary">Stockout Sensitivity</p>
                    <div className="h-1 w-full bg-bg-subtle rounded-full mt-2">
                        <div className="h-full bg-deep-orange w-1/2 rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-[10px] font-bold text-text-tertiary">RECOMMENDED FOCUS</span>
                        <span className="text-[10px] font-bold text-text-primary">75%</span>
                    </div>
                    <p className="text-xs font-semibold text-text-primary">Regional Transfers</p>
                    <div className="h-1 w-full bg-bg-subtle rounded-full mt-2">
                        <div className="h-full bg-text-primary w-3/4 rounded-full"></div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default StrategicOverview;
