import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdPerson, MdShoppingCart } from 'react-icons/md';
import analyticsData from '../../data/analyticsData.json';
import clsx from 'clsx';

const TrafficAnalytics = () => {
    // Guard Clause
    if (!analyticsData?.traffic) return null;

    const { footfall = '0', conversion = '0%' } = analyticsData.traffic;

    return (
        <GlassCard className="p-4 flex flex-col h-full justify-between bg-bg-card transition-colors duration-300">
            <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Traffic Analytics</span>
            <div className="space-y-5">
                {/* Metric 1 */}
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-bg-subtle flex items-center justify-center shrink-0">
                        <MdPerson className="text-text-secondary text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1.5">
                            <span className="text-[9px] font-bold text-text-secondary uppercase tracking-tight">Footfall</span>
                            <span className="text-xs font-mono font-bold text-text-primary">{footfall}</span>
                        </div>
                        {/* Meter Bar */}
                        <div className="h-1.5 bg-bg-subtle rounded-full overflow-hidden relative">
                            {/* Target Marker */}
                            <div className="absolute top-0 bottom-0 w-0.5 bg-text-primary z-10" style={{ left: '80%' }}></div>
                            <div
                                className={clsx("h-full rounded-full transition-all duration-1000",
                                    parseFloat(footfall) > 1.0 ? "bg-text-tertiary" : "bg-electric-red"
                                )}
                                style={{ width: '75%' }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-bg-subtle flex items-center justify-center shrink-0">
                        <MdShoppingCart className="text-text-secondary text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1.5">
                            <span className="text-[9px] font-bold text-text-secondary uppercase tracking-tight">Conversion</span>
                            <span className="text-xs font-mono font-bold text-text-primary">{conversion}</span>
                        </div>
                        {/* Meter Bar */}
                        <div className="h-1.5 bg-bg-subtle rounded-full overflow-hidden relative">
                            {/* Target Marker */}
                            <div className="absolute top-0 bottom-0 w-0.5 bg-text-primary z-10" style={{ left: '40%' }}></div>
                            <div
                                className={clsx("h-full rounded-full transition-all duration-1000",
                                    parseFloat(conversion) > 3.0 ? "bg-lime-green" : "bg-deep-orange"
                                )}
                                style={{ width: '35%' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default TrafficAnalytics;

