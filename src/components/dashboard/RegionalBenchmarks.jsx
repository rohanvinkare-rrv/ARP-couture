import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import TabButton from '../common/TabButton';
import regionalData from '../../data/regionalData.json';
import clsx from 'clsx';

const RegionalBenchmarks = ({ className }) => {
    const [activeTab, setActiveTab] = useState('Current Store');

    // Toggle logic simply to show interactivity, could map to different keys in future
    // Assuming 'districtView' is the alternative or just toggling view mode
    const data = activeTab === 'Current Store' ? regionalData.currentStore : regionalData.districtView;

    return (
        <GlassCard className={clsx("flex flex-col bg-bg-card transition-colors duration-300", className)}>
            <div className="px-4 py-3 border-b border-border-base flex justify-between items-center shrink-0">
                <span className="text-[10px] font-bold text-text-tertiary uppercase">Regional Benchmarks</span>
                <div className="flex gap-2">
                    <TabButton isActive={activeTab === 'Current Store'} onClick={() => setActiveTab('Current Store')}>Current Store</TabButton>
                    <TabButton isActive={activeTab === 'District'} onClick={() => setActiveTab('District')}>District</TabButton>
                </div>
            </div>

            <div className="p-4 flex-auto min-h-0 flex flex-col gap-3">
                <div className="space-y-2">
                    <div className="flex justify-between items-end text-xs font-bold text-text-primary">
                        <span>{data.store.name}</span>
                        <span className="font-mono">{data.store.value}</span>
                    </div>
                    <div className="h-2 w-full bg-bg-subtle rounded-full overflow-hidden">
                        <div
                            className="h-full bg-text-primary rounded-full transition-all duration-500 ease-out"
                            style={{ width: activeTab === 'Current Store' ? '75%' : '85%' }}
                        ></div>
                    </div>
                    <p className="text-[9px] text-lime-green font-bold uppercase tracking-widest">Performance: {data.store.performance}</p>
                </div>

                <div className="space-y-2 opacity-75">
                    <div className="flex justify-between items-end text-xs font-bold text-text-secondary">
                        <span>{data.district.name}</span>
                        <span className="font-mono">{data.district.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-bg-subtle rounded-full overflow-hidden">
                        <div
                            className="h-full bg-text-tertiary rounded-full transition-all duration-500 ease-out"
                            style={{ width: activeTab === 'Current Store' ? '50%' : '75%' }}
                        ></div>
                    </div>
                </div>

                <div className="p-3 rounded bg-lime-green/5 border border-lime-green/20 text-[10px] italic text-text-secondary leading-relaxed">
                    {activeTab === 'Current Store'
                        ? <><span className="text-text-primary font-bold">"Outperforming market by 22%</span>. Opportunity in 'Accessories' vs. Store #401."</>
                        : <><span className="text-text-primary font-bold">"District Leader</span> sets benchmark for Winter Campaign."</>
                    }
                </div>
            </div>
        </GlassCard>
    );
};

export default RegionalBenchmarks;
