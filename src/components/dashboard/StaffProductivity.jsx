import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdRefresh, MdGroups } from 'react-icons/md';
import controlCenterData from '../../data/controlCenterData.json';
import clsx from 'clsx';

const StaffProductivity = ({ className }) => {
    const { splh, metrics, shifts } = controlCenterData.staffProductivity;

    return (
        <GlassCard className={clsx("p-5 flex flex-col h-full bg-bg-card transition-colors duration-300", className)}>
            <div className="flex justify-between items-start mb-5">
                <div className="flex flex-col">
                    <h3 className="text-xs font-black uppercase tracking-widest text-text-primary">Staff Productivity</h3>
                    <span className="text-[10px] text-text-tertiary mt-0.5">Efficiency & Output</span>
                </div>
                <button className="p-1 rounded hover:bg-bg-hover text-text-tertiary transition-colors">
                    <MdRefresh className="text-base" />
                </button>
            </div>

            {/* Hero Metric: SPLH */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-text-primary tracking-tighter">{splh.value}</span>
                        <span className="text-[10px] font-bold text-lime-green bg-lime-green/10 px-1.5 py-0.5 rounded">
                            ▲ {splh.percent}
                        </span>
                    </div>
                    <span className="text-[10px] font-medium text-text-secondary mt-1 flex items-center gap-1">
                        <MdGroups className="text-sm" /> Sales Per Labor Hour
                    </span>
                </div>
                {/* Mini Box for context */}
                <div className="text-right">
                    <div className="text-[9px] font-bold text-text-primary bg-bg-subtle px-2 py-1 rounded border border-border-subtle">
                        {splh.label}
                    </div>
                </div>
            </div>

            {/* Secondary Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-bg-subtle rounded p-2 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.conversion.label}</span>
                    <div className="flex items-end justify-between mt-1">
                        <span className="text-sm font-bold text-text-primary">{metrics.conversion.value}</span>
                        <span className="text-[8px] font-bold text-lime-green">{metrics.conversion.trend}</span>
                    </div>
                </div>
                <div className="bg-bg-subtle rounded p-2 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.upt.label}</span>
                    <div className="flex items-end justify-between mt-1">
                        <span className="text-sm font-bold text-text-primary">{metrics.upt.value}</span>
                        <span className="text-[8px] font-bold text-electric-red">{metrics.upt.trend}</span>
                    </div>
                </div>
                <div className="bg-bg-subtle rounded p-2 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.activeStaff.label}</span>
                    <span className="text-sm font-bold text-text-primary mt-1">{metrics.activeStaff.value}</span>
                </div>
            </div>

            {/* Shift Breakdown */}
            <div className="space-y-4 flex-1">
                {shifts.map((shift, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-1.5">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-text-primary">{shift.name}</span>
                                <span className="text-[9px] text-text-tertiary font-medium bg-bg-hover px-1.5 rounded-full">
                                    {shift.staffCount} Staff
                                </span>
                            </div>
                            <span className={clsx("text-[9px] font-bold",
                                shift.status === 'Exceeding' ? 'text-lime-green' : 'text-deep-orange'
                            )}>
                                {shift.status}
                            </span>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex justify-between text-[9px] font-mono font-bold text-text-primary mb-1">
                                <span>₹{shift.current}</span>
                                <span className="text-text-tertiary font-normal">Target: ₹{shift.target}</span>
                            </div>

                            <div className="h-1.5 bg-bg-subtle rounded-full overflow-hidden w-full relative">
                                {/* Target Marker moved to be simpler */}
                                <div className="absolute top-0 bottom-0 w-0.5 bg-text-tertiary/30 z-10"
                                    style={{ left: `${(shift.target / 6000) * 100}%` }}></div>

                                <div
                                    className={clsx("h-full rounded-full transition-all duration-500", shift.color)}
                                    style={{ width: `${(shift.current / 6000) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default StaffProductivity;
