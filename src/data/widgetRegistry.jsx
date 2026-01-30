// Registry of all available widgets for the Playground
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

// Define standardized grid units (12 column grid)
// Default heights are in row units (approx 10px + gap)

export const widgetRegistry = [
    {
        id: 'strategic-overview',
        label: 'Strategic Overview',
        category: 'Global Pulse',
        component: <StrategicOverview className="h-full w-full" />,
        defaultW: 8,
        defaultH: 10
    },
    {
        id: 'velocity-matrix',
        label: 'Product Velocity Matrix',
        category: 'Global Pulse',
        component: <ProductVelocityMatrix className="h-full w-full" />,
        defaultW: 4,
        defaultH: 13
    },
    {
        id: 'regional-benchmarks',
        label: 'Regional Benchmarks',
        category: 'Global Pulse',
        component: <RegionalBenchmarks className="h-full w-full" />,
        defaultW: 4,
        defaultH: 11
    },
    {
        id: 'critical-alerts',
        label: 'Critical Alerts',
        category: 'Global Pulse',
        component: <CriticalAlerts className="h-full w-full" />,
        defaultW: 4,
        defaultH: 20
    },
    {
        id: 'traffic-analytics',
        label: 'Traffic Analytics',
        category: 'Global Pulse',
        component: <TrafficAnalytics className="h-full w-full" />,
        defaultW: 3,
        defaultH: 9
    },
    {
        id: 'inventory-health',
        label: 'Inventory Health',
        category: 'Global Pulse',
        component: <InventoryHealth className="h-full w-full" />,
        defaultW: 3,
        defaultH: 9
    },
    {
        id: 'regional-rank',
        label: 'Regional Leaderboard',
        category: 'Global Pulse',
        component: <RegionalRank className="h-full w-full" />,
        defaultW: 3,
        defaultH: 9
    },
    {
        id: 'inventory-pulse',
        label: 'Inventory Pulse',
        category: 'Global Pulse',
        component: <SystemInsights className="h-full w-full" />,
        defaultW: 3,
        defaultH: 9
    },
    {
        id: 'health-matrix',
        label: 'Health Matrix',
        category: 'Global Pulse',
        component: <HealthMatrix className="h-full w-full" />,
        defaultW: 4,
        defaultH: 17
    },
    {
        id: 'staff-productivity',
        label: 'Staff Productivity',
        category: 'Global Pulse',
        component: <StaffProductivity className="h-full w-full" />,
        defaultW: 4,
        defaultH: 16
    },
    {
        id: 'inbound-logistics',
        label: 'Inbound Logistics',
        category: 'Global Pulse',
        component: <InboundLogistics className="h-full w-full" />,
        defaultW: 4,
        defaultH: 17
    }
];

export const getWidgetById = (id) => widgetRegistry.find(w => w.id === id);
