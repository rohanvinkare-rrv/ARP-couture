import React from 'react';
import { useToast } from '../contexts/ToastContext';

const ToastDemo = () => {
    const toast = useToast();

    return (
        <div className="flex-1 overflow-y-auto p-8 bg-bg-app">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-text-primary mb-2">Toast Notification System</h1>
                <p className="text-text-secondary mb-8">Professional, themed notification system replacing default browser alerts.</p>

                <div className="glass-card bg-bg-card p-6 rounded-lg border border-border-base mb-6">
                    <h2 className="text-xl font-bold text-text-primary mb-4">Try Different Toast Types</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button
                            onClick={() => toast.success('Operation completed successfully!')}
                            className="px-4 py-3 bg-lime-green/10 hover:bg-lime-green/20 border border-lime-green/30 text-lime-green rounded-lg font-medium transition-colors"
                        >
                            Success Toast
                        </button>
                        <button
                            onClick={() => toast.error('An error occurred. Please try again.')}
                            className="px-4 py-3 bg-electric-red/10 hover:bg-electric-red/20 border border-electric-red/30 text-electric-red rounded-lg font-medium transition-colors"
                        >
                            Error Toast
                        </button>
                        <button
                            onClick={() => toast.warning('Warning: This action cannot be undone.')}
                            className="px-4 py-3 bg-deep-orange/10 hover:bg-deep-orange/20 border border-deep-orange/30 text-deep-orange rounded-lg font-medium transition-colors"
                        >
                            Warning Toast
                        </button>
                        <button
                            onClick={() => toast.info('New updates are available.')}
                            className="px-4 py-3 bg-bg-primary/10 hover:bg-bg-primary/20 border border-bg-primary/30 text-text-primary rounded-lg font-medium transition-colors"
                        >
                            Info Toast
                        </button>
                    </div>
                </div>

                <div className="glass-card bg-bg-card p-6 rounded-lg border border-border-base">
                    <h2 className="text-xl font-bold text-text-primary mb-4">Usage Example</h2>
                    <pre className="bg-bg-subtle p-4 rounded-lg text-sm overflow-x-auto">
                        <code className="text-text-primary">{`import { useToast } from './contexts/ToastContext';

function MyComponent() {
  const toast = useToast();

  const handleAction = () => {
    // Show success toast
    toast.success('Data saved successfully!');
    
    // Show error toast
    toast.error('Failed to save data');
    
    // Show warning toast
    toast.warning('Unsaved changes detected');
    
    // Show info toast
    toast.info('New version available');
    
    // Custom duration (default is 4000ms)
    toast.success('Quick message', 2000);
  };

  return <button onClick={handleAction}>Save</button>;
}`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ToastDemo;
