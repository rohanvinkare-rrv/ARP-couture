import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdRefresh, MdLocalShipping, MdWarehouse } from 'react-icons/md';
import controlCenterData from '../../data/controlCenterData.json';
import clsx from 'clsx';

const InboundLogistics = ({ className }) => {
    const { otif, metrics, timeline } = controlCenterData.dockOperations;

    return (
        <GlassCard className={clsx("p-5 flex flex-col h-full bg-bg-card transition-colors duration-300", className)}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <h3 className="text-xs font-black uppercase tracking-widest text-text-primary">Inbound (Dock)</h3>
                    <span className="text-[10px] text-text-tertiary mt-0.5">Shipment Velocity</span>
                </div>
                <button className="p-1 rounded hover:bg-bg-hover text-text-tertiary transition-colors">
                    <MdRefresh className="text-base" />
                </button>
            </div>

            {/* Hero Metric: OTIF */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-text-primary tracking-tighter">{otif.value}</span>
                        <span className="text-[10px] font-bold text-lime-green bg-lime-green/10 px-1.5 py-0.5 rounded">
                            {otif.trend}
                        </span>
                    </div>
                    <span className="text-[10px] font-medium text-text-secondary mt-1 flex items-center gap-1">
                        <MdLocalShipping className="text-sm" /> {otif.label}
                    </span>
                </div>
                <div className="text-right">
                    <div className="text-[9px] font-bold text-text-primary bg-bg-subtle px-2 py-1 rounded border border-border-subtle">
                        {otif.status}
                    </div>
                </div>
            </div>

            {/* Secondary Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.pendingUnits.label}</span>
                    <span className="text-sm font-bold text-text-primary mt-0.5">{metrics.pendingUnits.value}</span>
                </div>
                <div className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.activeDoors.label}</span>
                    <span className="text-sm font-bold text-text-primary mt-0.5">{metrics.activeDoors.value}</span>
                </div>
                <div className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.nextTruck.label}</span>
                    <span className="text-sm font-bold text-text-primary mt-0.5">{metrics.nextTruck.value}</span>
                </div>
            </div>

            <div className="flex-1 relative pl-2 overflow-y-auto pr-1">
                {/* Vertical Line */}
                <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-border-base"></div>

                <div className="space-y-3">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative pl-5">
                            {/* Dot */}
                            <div className={clsx(
                                "absolute left-[-2px] top-3 size-2.5 rounded-full border-2 border-bg-card z-10",
                                item.statusColor // Using the color class directly from JSON
                            )}></div>

                            {/* Card Content */}
                            <div className="bg-bg-subtle border border-border-subtle rounded p-2 hover:bg-bg-hover transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-0.5">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-text-primary leading-none">{item.time}</span>
                                        <span className="text-[9px] text-text-tertiary">{item.dockDoor}</span>
                                    </div>
                                    <span className={clsx(
                                        "text-[9px] px-1 py-0 rounded font-bold uppercase tracking-wider",
                                        item.statusColor.replace('bg-', 'text-').replace('text-text', 'text-zinc') + "/80 bg-white/50 dark:bg-black/20"
                                    )}>
                                        {item.status}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-bold text-xs text-text-primary">{item.title}</span>
                                    <span className="text-[8px] font-bold text-text-tertiary border border-border-base px-1 rounded">{item.carrier}</span>
                                </div>

                                <div className="text-[9px] text-text-secondary font-medium mb-1.5">
                                    {item.details}
                                </div>

                                {/* Progress Bar if active */}
                                {item.progress > 0 && (
                                    <div className="h-1 bg-bg-card rounded-full overflow-hidden w-full border border-border-subtle">
                                        <div
                                            className="h-full bg-text-primary rounded-full"
                                            style={{ width: `${item.progress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GlassCard>
    );
};

export default InboundLogistics;
