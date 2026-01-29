import React from 'react';
import GlassCard from '../common/GlassCard';
import analyticsData from '../../data/analyticsData.json';
import clsx from 'clsx';


const InventoryHealth = () => {
    // Guard Clause: Handle missing data gracefully
    if (!analyticsData?.inventory) {
        return (
            <GlassCard className="p-4 flex items-center justify-center bg-bg-card h-64">
                <span className="text-xs text-text-tertiary">No Inventory Data</span>
            </GlassCard>
        );
    }

    const pct = parseInt(analyticsData.inventory.health);

    return (
        <GlassCard className="p-4 flex flex-col justify-between bg-bg-card transition-colors duration-300">
            <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Inventory Health</span>
                    <span className="text-2xl font-mono font-bold text-text-primary mt-1">{analyticsData.inventory.health}</span>
                </div>
                {/* Secondary Metrics Mini-Grid */}
                {/* Secondary Metrics Mini-Grid */}
                <div className="flex gap-6 text-right">
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] text-text-secondary uppercase font-semibold tracking-wider mb-0.5">Sell-Through Rate</span>
                        <span className="text-sm font-mono font-bold text-text-primary">{analyticsData.inventory.metrics?.str || '--'}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] text-text-secondary uppercase font-semibold tracking-wider mb-0.5">Weeks of Supply</span>
                        <span className="text-sm font-mono font-bold text-text-primary">{analyticsData.inventory.metrics?.wos || '--'}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {/* Composition Bar */}
                <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-bg-subtle border border-bg-subtle/50">
                    {analyticsData.inventory.breakdown?.map((item, i) => (
                        <div key={i} className={clsx("h-full", item.color)} style={{ width: item.value }}></div>
                    ))}
                </div>

                {/* Legend with Context */}
                <div className="flex justify-between">
                    {analyticsData.inventory.breakdown?.map((item, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <div className={clsx("size-1.5 rounded-full", item.color)}></div>
                                <span className="text-[9px] font-medium text-text-secondary uppercase tracking-wider">{item.label}</span>
                            </div>
                            <span className="text-[9px] font-bold text-text-primary pl-3">{item.context}</span>
                        </div>
                    ))}
                </div>
            </div>
        </GlassCard>
    );
};

export default InventoryHealth;
