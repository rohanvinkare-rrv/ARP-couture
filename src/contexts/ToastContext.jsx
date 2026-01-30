import React, { createContext, useContext, useState, useCallback } from 'react';
import { MdCheckCircle, MdError, MdWarning, MdInfo, MdClose } from 'react-icons/md';
import clsx from 'clsx';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

const Toast = ({ id, type = 'info', message, onClose }) => {
    const icons = {
        success: <MdCheckCircle className="text-xl" />,
        error: <MdError className="text-xl" />,
        warning: <MdWarning className="text-xl" />,
        info: <MdInfo className="text-xl" />
    };

    const colors = {
        success: 'bg-lime-green/10 border-lime-green/30 text-lime-green',
        error: 'bg-electric-red/10 border-electric-red/30 text-electric-red',
        warning: 'bg-deep-orange/10 border-deep-orange/30 text-deep-orange',
        info: 'bg-bg-primary/10 border-bg-primary/30 text-text-primary'
    };

    return (
        <div
            className={clsx(
                "glass-card backdrop-blur-xl rounded-lg border shadow-lg p-4 mb-3 flex items-center gap-3 min-w-[320px] max-w-md animate-slide-in-right",
                colors[type]
            )}
        >
            <div className="shrink-0">
                {icons[type]}
            </div>
            <div className="flex-1 text-sm font-medium text-text-primary">
                {message}
            </div>
            <button
                onClick={() => onClose(id)}
                className="shrink-0 p-1 rounded hover:bg-bg-hover transition-colors text-text-tertiary hover:text-text-primary"
            >
                <MdClose className="text-lg" />
            </button>
        </div>
    );
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'info', duration = 4000) => {
        const id = Date.now() + Math.random();
        setToasts(prev => [...prev, { id, message, type }]);

        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }

        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const toast = {
        success: (message, duration) => addToast(message, 'success', duration),
        error: (message, duration) => addToast(message, 'error', duration),
        warning: (message, duration) => addToast(message, 'warning', duration),
        info: (message, duration) => addToast(message, 'info', duration),
    };

    return (
        <ToastContext.Provider value={toast}>
            {children}
            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-[9999] flex flex-col items-end pointer-events-none">
                <div className="pointer-events-auto">
                    {toasts.map(({ id, type, message }) => (
                        <Toast
                            key={id}
                            id={id}
                            type={type}
                            message={message}
                            onClose={removeToast}
                        />
                    ))}
                </div>
            </div>
        </ToastContext.Provider>
    );
};
