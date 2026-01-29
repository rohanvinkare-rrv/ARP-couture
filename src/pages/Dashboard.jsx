import React from 'react';
import StrategicOverview from '../components/dashboard/StrategicOverview';
import ProductVelocityMatrix from '../components/dashboard/ProductVelocityMatrix';
import RegionalBenchmarks from '../components/dashboard/RegionalBenchmarks';
import CriticalAlerts from '../components/dashboard/CriticalAlerts';
import TrafficAnalytics from '../components/dashboard/TrafficAnalytics';
import InventoryHealth from '../components/dashboard/InventoryHealth';
import RegionalRank from '../components/dashboard/RegionalRank';
import SystemInsights from '../components/dashboard/SystemInsights';
import HealthMatrix from '../components/dashboard/HealthMatrix';
import StaffProductivity from '../components/dashboard/StaffProductivity';
import InboundLogistics from '../components/dashboard/InboundLogistics';

const Dashboard = () => {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-app transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-8 space-y-4">
                    <StrategicOverview />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProductVelocityMatrix />
                        <RegionalBenchmarks />
                    </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <CriticalAlerts />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <TrafficAnalytics />
                <InventoryHealth />
                <RegionalRank />
                <SystemInsights />
            </div>

            {/* Extended Command Center Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <HealthMatrix />
                <StaffProductivity />
                <InboundLogistics />
            </div>
        </div>
    );
};

export default Dashboard;
