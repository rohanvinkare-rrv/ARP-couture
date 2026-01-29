import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdInsights, MdAssignmentReturn } from 'react-icons/md';
import analyticsData from '../../data/analyticsData.json';

const SystemInsights = () => {
    const { hero, metrics } = analyticsData.system.pulse;

    return (
        <GlassCard className="p-3 flex flex-col h-full bg-bg-card transition-colors duration-300 relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-2 z-10">
                <div className="flex gap-1.5 items-center">
                    <MdInsights className="text-xs text-text-secondary" />
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Inventory Pulse</span>
                </div>
            </div>

            {/* Hero Metric: Return Rate */}
            <div className="flex items-center justify-between mb-3 z-10">
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-text-primary tracking-tighter">{hero.value}</span>
                        <span className="text-[10px] font-bold text-electric-red bg-electric-red/10 px-1.5 py-0.5 rounded">
                            {hero.trend}
                        </span>
                    </div>
                    <span className="text-[10px] font-medium text-text-secondary mt-0.5 flex items-center gap-1">
                        <MdAssignmentReturn className="text-xs" /> {hero.label}
                    </span>
                </div>
                <div className="text-right">
                    <div className="text-[9px] font-bold text-electric-red bg-bg-subtle px-2 py-1 rounded border border-electric-red/20 shadow-sm">
                        {hero.status}
                    </div>
                </div>
            </div>

            {/* Secondary Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 mt-auto z-10">
                {metrics.map((metric, index) => (
                    <div key={index} className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle hover:bg-bg-hover transition-colors">
                        <span className="text-[8px] text-text-secondary uppercase truncate">{metric.label}</span>
                        <div className="flex flex-col mt-0.5">
                            <span className="text-xs font-bold text-text-primary leading-tight">{metric.value}</span>
                            <span className="text-[8px] font-bold text-text-tertiary">{metric.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Subtle decorative flush */}
            <div className="absolute -top-10 -right-10 size-24 bg-electric-red/5 rounded-full blur-2xl pointer-events-none"></div>
        </GlassCard>
    );
};

export default SystemInsights;
