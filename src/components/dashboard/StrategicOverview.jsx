import React from 'react';
import GlassCard from '../common/GlassCard';
import clsx from 'clsx';

const StrategicOverview = ({ className }) => {
    // Modular Data Configuration
    const reportData = {
        quarter: "Q4-2025",
        summary: "Revenue pacing exceeds targets. High friction detected in <span class='text-text-primary font-semibold'>Technical Footwear</span> due to logistic delays. Regional demand is shifting toward accessories.",
        metrics: [
            { label: "PRIMARY DRIVER", value: "80%", title: "Technical Gear Peak", color: "bg-lime-green", width: "w-4/5" },
            { label: "RISK FACTOR", value: "50%", title: "Stockout Sensitivity", color: "bg-deep-orange", width: "w-1/2" },
            { label: "RECOMMENDED FOCUS", value: "75%", title: "Regional Transfers", color: "bg-text-primary", width: "w-3/4" }
        ]
    };

    return (
        <GlassCard className={clsx("p-6 flex flex-col gap-6 bg-bg-card transition-colors duration-300", className)}>
            <div>
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-sm font-bold text-text-primary flex items-center gap-2">
                        <span className="size-2 rounded-full bg-lime-green animate-pulse"></span>
                        Strategic Overview
                    </h2>
                    <span className="text-[9px] font-mono text-text-tertiary">{reportData.quarter}</span>
                </div>
                <div className="flex gap-8">
                    <p
                        className="text-[11px] text-text-secondary max-w-xl"
                        dangerouslySetInnerHTML={{ __html: reportData.summary }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border-base">
                {reportData.metrics.map((metric, i) => (
                    <div key={i} className="space-y-1">
                        <div className="flex justify-between">
                            <span className="text-[10px] font-bold text-text-tertiary">{metric.label}</span>
                            <span className="text-[10px] font-bold text-text-primary">{metric.value}</span>
                        </div>
                        <p className="text-xs font-semibold text-text-primary">{metric.title}</p>
                        <div className="h-1 w-full bg-bg-subtle rounded-full mt-2">
                            <div className={clsx("h-full rounded-full", metric.color, metric.width)}></div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default StrategicOverview;
