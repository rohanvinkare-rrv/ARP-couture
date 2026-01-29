import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import TabButton from '../common/TabButton';
import productsData from '../../data/productsData.json';
import clsx from 'clsx';

const ProductVelocityMatrix = () => {
    const [activeTab, setActiveTab] = useState('Top Items');

    const data = activeTab === 'Top Items' ? productsData.topItems : productsData.categories;

    return (
        <GlassCard className="h-64 flex flex-col bg-bg-card transition-colors duration-300">
            <div className="p-3 border-b border-border-base flex justify-between items-center shrink-0">
                <span className="text-[10px] font-bold text-text-tertiary">PRODUCT VELOCITY MATRIX</span>
                <div className="flex gap-2">
                    <TabButton isActive={activeTab === 'Top Items'} onClick={() => setActiveTab('Top Items')}>Top Items</TabButton>
                    <TabButton isActive={activeTab === 'Categories'} onClick={() => setActiveTab('Categories')}>Categories</TabButton>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <table className="w-full text-[11px] compact-table">
                    <thead className="bg-bg-subtle text-text-secondary uppercase text-[9px]">
                        <tr>
                            <td className="font-bold pl-3">ID</td>
                            <td className="font-bold">{activeTab === 'Top Items' ? 'Product Name' : 'Category Name'}</td>
                            <td className="font-bold text-right">Revenue</td>
                            <td className="font-bold text-right pr-3">Trend</td>
                        </tr>
                    </thead>
                    <tbody className="">
                        {data.map((item) => (
                            <tr key={item.id} className="border-b border-border-subtle hover:bg-bg-hover transition-colors cursor-pointer group">
                                <td className="font-mono text-text-secondary pl-3 group-hover:text-text-primary">{item.id}</td>
                                <td className="text-text-primary font-medium group-hover:underline">{item.name}</td>
                                <td className="text-right font-mono text-text-primary">{item.revenue}</td>
                                <td className={clsx("text-right font-bold pr-3", {
                                    "text-lime-green": item.trendColor === "green",
                                    "text-electric-red": item.trendColor === "red",
                                    "text-text-secondary": item.trendColor === "neutral"
                                })}>
                                    {item.trend}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GlassCard>
    );
};

export default ProductVelocityMatrix;
