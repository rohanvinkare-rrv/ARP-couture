import React from 'react';
import { MdWarning, MdClose } from 'react-icons/md';
import clsx from 'clsx';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = 'Confirm', cancelText = 'Cancel', type = 'warning' }) => {
    if (!isOpen) return null;

    const colors = {
        warning: 'bg-deep-orange/10 border-deep-orange/30 text-deep-orange',
        danger: 'bg-electric-red/10 border-electric-red/30 text-electric-red',
        info: 'bg-bg-primary/10 border-bg-primary/30 text-text-primary'
    };

    const buttonColors = {
        warning: 'bg-deep-orange hover:bg-deep-orange/90',
        danger: 'bg-electric-red hover:bg-electric-red/90',
        info: 'bg-bg-active hover:bg-bg-active/90'
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-bg-panel w-full max-w-md rounded-xl shadow-2xl border border-border-base flex flex-col animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className={clsx("flex items-center gap-3 p-5 border-b border-border-base", colors[type])}>
                    <div className="shrink-0">
                        <MdWarning className="text-2xl" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="shrink-0 p-1 rounded hover:bg-bg-hover transition-colors text-text-tertiary hover:text-text-primary"
                    >
                        <MdClose className="text-lg" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-sm text-text-secondary leading-relaxed">
                        {message}
                    </p>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-border-base bg-bg-subtle/30 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-hover rounded-lg transition-colors"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className={clsx(
                            "px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors shadow-lg",
                            buttonColors[type]
                        )}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
