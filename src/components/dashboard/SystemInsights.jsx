import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdInfo, MdAutoAwesome } from 'react-icons/md';
import analyticsData from '../../data/analyticsData.json';

const SystemInsights = () => {
    return (
        <GlassCard className="p-4 flex flex-col justify-between h-40 bg-bg-card transition-colors duration-300">
            <div className="flex justify-between items-start z-10 relative">
                <div className="flex gap-2 items-center">
                    <MdInfo className="text-xs text-text-secondary" />
                    <span className="text-[10px] font-bold text-text-secondary uppercase">System Insights</span>
                </div>
                <div className="flex gap-1">
                    <div className="size-1.5 rounded-full bg-bg-subtle"></div>
                    <div className="size-1.5 rounded-full bg-bg-subtle"></div>
                    <div className="size-1.5 rounded-full bg-text-primary"></div>
                </div>
            </div>

            <p className="text-[10px] text-text-secondary leading-tight z-10 relative pr-4">
                Implementing all 3 pending alerts can protect <span className="text-text-primary font-bold">$4,800</span> in weekly margin.
                <br /><br />
                <span className="underline decoration-text-tertiary cursor-pointer hover:text-text-primary transition-colors">Review Impact Analysis &rarr;</span>

            </p>

            <MdAutoAwesome className="absolute -bottom-4 -right-4 text-8xl text-bg-hover rotate-12 group-hover:rotate-0 transition-transform duration-500" />
        </GlassCard>
    );
};

export default SystemInsights;
