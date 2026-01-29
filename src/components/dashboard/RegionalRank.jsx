import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdLeaderboard } from 'react-icons/md';
import analyticsData from '../../data/analyticsData.json';
import clsx from 'clsx';

const RegionalRank = () => {
    // Guard Clause
    if (!analyticsData?.rank?.position) return null;

    // Safe extraction of rank number
    const rankStr = analyticsData.rank.position;
    const currentRank = parseInt(rankStr.replace(/[^0-9]/g, '')) || 4; // Default to 4 if parse fails

    // Mock neighborhood of ranks for the "Matrix" feel
    const ranks = [
        { rank: currentRank - 1, label: 'Store #012', score: '98%', active: false },
        { rank: currentRank, label: 'My Store', score: '92%', active: true },
        { rank: currentRank + 1, label: 'Store #088', score: '89%', active: false },
    ];

    return (
        <GlassCard className="p-4 flex flex-col justify-between bg-bg-card transition-colors duration-300">
            <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Regional Rank</span>
                <MdLeaderboard className="text-text-tertiary text-sm" />
            </div>

            <div className="flex flex-col gap-1 w-full">
                {ranks.map((item) => (
                    <div
                        key={item.rank}
                        className={clsx(
                            "flex justify-between items-center px-2 py-1 rounded text-[9px] font-mono",
                            item.active ? "bg-bg-active/5 border border-border-base text-text-primary font-bold shadow-sm" : "text-text-tertiary"
                        )}
                    >
                        <span className="w-6">#{item.rank.toString().padStart(2, '0')}</span>
                        <span className="flex-1 px-2 truncate font-sans">{item.label}</span>
                        <span>{item.score}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default RegionalRank;
