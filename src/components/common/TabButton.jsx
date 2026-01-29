import React from 'react';
import clsx from 'clsx';


const TabButton = ({ isActive, onClick, children }) => (
    <button
        onClick={onClick}
        className={`tab-btn ${isActive ? 'active' : ''}`}
    >
        {children}
    </button>
);

export default TabButton;

