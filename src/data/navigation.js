import {
    MdDashboard,
    MdInventory2,
    MdPayments,
    MdGroups,
    MdEmergency,
    MdAutoAwesome,
    MdDashboardCustomize
} from 'react-icons/md';

export const APP_NAVIGATION = {
    main: [
        { label: 'Global Pulse', icon: MdDashboard, path: '/' },
        { label: 'Custom View', icon: MdDashboardCustomize, path: '/playground' },
        { label: 'Inventory Velocity', icon: MdInventory2, path: '#' },
        { label: 'Margin Control', icon: MdPayments, path: '#' },
        { label: 'Regional Benchmarks', icon: MdGroups, path: '#' },
    ],
    analytics: [
        { label: 'Critical Alerts', icon: MdEmergency, badge: 3, badgeColor: 'bg-electric-red', path: '#' },
        { label: 'Predictive Actions', icon: MdAutoAwesome, path: '#' },
    ]
};

// Helper to get flat list of category names for Playground
export const getPlaygroundCategories = () => {
    const allItems = [...APP_NAVIGATION.main, ...APP_NAVIGATION.analytics];
    return allItems
        .filter(item => item.path !== '/playground') // Exclude the playground itself
        .map(item => item.label);
};
