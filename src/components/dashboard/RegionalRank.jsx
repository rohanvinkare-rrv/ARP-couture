import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdLeaderboard, MdTrendingUp } from 'react-icons/md';
import analyticsData from '../../data/analyticsData.json';
import clsx from 'clsx';

const RegionalRank = () => {
    const { current, metrics, standings } = analyticsData.rank;

    return (
        <GlassCard className="p-3 flex flex-col justify-between h-full bg-bg-card transition-colors duration-300">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex gap-1.5 items-center">
                    <MdLeaderboard className="text-xs text-text-secondary" />
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Leaderboard</span>
                </div>
                <span className="text-[9px] font-bold text-lime-green bg-lime-green/10 px-1.5 py-0.5 rounded border border-lime-green/20">
                    {current.tier}
                </span>
            </div>

            {/* List */}
            <div className="flex flex-col gap-1.5 mt-2">
                {standings.map((item, index) => (
                    <div
                        key={index}
                        className={clsx(
                            "flex justify-between items-center px-2 py-1.5 rounded border transition-all",
                            item.isMe
                                ? "bg-bg-primary/5 border-bg-primary/10 shadow-sm translate-x-1"
                                : "bg-transparent border-transparent opacity-60"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <span className={clsx(
                                "font-mono font-bold text-xs",
                                item.isMe ? "text-text-primary" : "text-text-tertiary"
                            )}>{item.rank}</span>
                            <span className={clsx(
                                "text-[10px] font-medium",
                                item.isMe ? "text-text-primary" : "text-text-secondary"
                            )}>{item.store}</span>
                        </div>
                        <span className="font-mono font-bold text-[10px] text-text-primary">{item.score}</span>
                    </div>
                ))}
            </div>

            {/* Footer / Motivation */}
            <div className="mt-auto pt-2 flex items-center justify-between border-t border-border-subtle/50">
                <div className="flex items-center gap-1 text-lime-green">
                    <MdTrendingUp className="text-xs" />
                    <span className="text-[9px] font-bold">{metrics.gap}</span>
                </div>
                <span className="text-[9px] text-text-tertiary">Weekly Reset</span>
            </div>
        </GlassCard>
    );
};

export default RegionalRank;
