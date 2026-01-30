import React from 'react';
import GlassCard from '../common/GlassCard';
import { MdRefresh, MdHealthAndSafety, MdWarning } from 'react-icons/md';
import controlCenterData from '../../data/controlCenterData.json';
import clsx from 'clsx';

const HealthMatrix = ({ className }) => {
    const { score, metrics, rows, alert } = controlCenterData.healthMatrix;

    return (
        <GlassCard className={clsx("p-5 flex flex-col h-full bg-bg-card transition-colors duration-300", className)}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <h3 className="text-xs font-black uppercase tracking-widest text-text-primary">Health Matrix</h3>
                    <span className="text-[10px] text-text-tertiary mt-0.5">Inventory Quality</span>
                </div>
                <button className="p-1 rounded hover:bg-bg-hover text-text-tertiary transition-colors">
                    <MdRefresh className="text-base" />
                </button>
            </div>

            {/* Hero Metric: Health Score */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-text-primary tracking-tighter">{score.value}</span>
                        <span className="text-[10px] font-bold text-lime-green bg-lime-green/10 px-1.5 py-0.5 rounded">
                            {score.trend}
                        </span>
                    </div>
                    <span className="text-[10px] font-medium text-text-secondary mt-1 flex items-center gap-1">
                        <MdHealthAndSafety className="text-sm" /> {score.label}
                    </span>
                </div>
                <div className="text-right">
                    <div className="text-[9px] font-bold text-text-primary bg-bg-subtle px-2 py-1 rounded border border-border-subtle">
                        {score.status}
                    </div>
                </div>
            </div>

            {/* Secondary Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.stockouts.label}</span>
                    <div className="flex items-baseline justify-between mt-0.5">
                        <span className="text-sm font-bold text-text-primary">{metrics.stockouts.value}</span>
                        <span className="text-[8px] font-bold text-lime-green">{metrics.stockouts.trend}</span>
                    </div>
                </div>
                <div className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.overstockVal.label}</span>
                    <div className="flex items-baseline justify-between mt-0.5">
                        <span className="text-sm font-bold text-text-primary">{metrics.overstockVal.value}</span>
                        <span className="text-[8px] font-bold text-lime-green">{metrics.overstockVal.trend}</span>
                    </div>
                </div>
                <div className="bg-bg-subtle rounded p-1.5 flex flex-col border border-border-subtle">
                    <span className="text-[9px] text-text-secondary uppercase">{metrics.turnover.label}</span>
                    <span className="text-sm font-bold text-text-primary mt-0.5">{metrics.turnover.value}</span>
                </div>
            </div>

            {/* Compact Category Table */}
            <div className="flex-1 overflow-x-auto mb-2">
                <table className="w-full text-[10px] compact-table">
                    <thead>
                        <tr className="text-text-tertiary border-b border-border-base">
                            <th className="pb-1 text-left font-bold uppercase tracking-wider pl-1">Cat.</th>
                            <th className="pb-1 text-right font-bold uppercase tracking-wider">Good</th>
                            <th className="pb-1 text-right font-bold uppercase tracking-wider">Low</th>
                            <th className="pb-1 text-right font-bold uppercase tracking-wider">Over</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                        {rows.map((row, index) => (
                            <tr key={index} className="group hover:bg-bg-hover transition-colors">
                                <td className="py-1.5 font-bold text-text-primary pl-1">{row.category}</td>
                                <td className="py-1.5 text-right font-mono text-lime-green font-bold">{row.healthy}</td>
                                <td className="py-1.5 text-right font-mono text-deep-orange font-medium">{row.low}</td>
                                <td className="py-1.5 text-right font-mono text-electric-red font-medium">{row.overstock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Compact Alert */}
            {alert && (
                <div className="mt-auto p-2 bg-electric-red/5 border border-electric-red/10 rounded flex gap-2 items-center">
                    <MdWarning className="text-electric-red text-xs shrink-0" />
                    <span className="text-[9px] font-bold text-electric-red clamp-1 leading-none">{alert.message}</span>
                </div>
            )}
        </GlassCard>
    );
};

export default HealthMatrix;
