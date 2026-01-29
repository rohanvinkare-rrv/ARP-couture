export const formatCurrency = (value) => {
    if (typeof value === 'string') return value;
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(value);
};

export const formatNumber = (value) => {
    if (typeof value === 'string') return value;
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(value);
};
