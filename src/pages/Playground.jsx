import React, { useState, useEffect, useRef } from 'react';
import { Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { widgetRegistry } from '../data/widgetRegistry';
import GlassCard from '../components/common/GlassCard';
import ConfirmModal from '../components/common/ConfirmModal';
import { MdAdd, MdEdit, MdClose, MdCheck, MdDashboardCustomize } from 'react-icons/md';
import clsx from 'clsx';
import { getPlaygroundCategories } from '../data/navigation';

// Custom hook to get container width (Replacer for WidthProvider)
const useWidth = () => {
    const [width, setWidth] = useState(1200); // Default
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                // Use contentRect.width for inner width
                setWidth(entry.contentRect.width);
            }
        });

        observer.observe(element);

        // Initial set
        setWidth(element.offsetWidth);

        return () => observer.disconnect();
    }, []);

    return { width, ref };
};

const Playground = () => {
    // Layout state with Lazy Initialization + Deduplication
    const [layout, setLayout] = useState(() => {
        const savedLayout = localStorage.getItem('arp_playground_layout');
        if (!savedLayout) return [];

        try {
            const parsed = JSON.parse(savedLayout);
            // Deduplicate: Keep only the first instance of each widgetId
            const unique = [];
            const seen = new Set();
            for (const item of parsed) {
                if (item.widgetId && !seen.has(item.widgetId)) {
                    seen.add(item.widgetId);
                    unique.push(item);
                }
            }
            return unique;
        } catch (e) {
            return [];
        }
    });

    // Run deduplication once on mount (in case existing storage has dupes)
    useEffect(() => {
        const savedLayout = localStorage.getItem('arp_playground_layout');
        if (savedLayout) {
            try {
                const parsed = JSON.parse(savedLayout);
                const unique = [];
                const seen = new Set();
                let hasDupes = false;
                for (const item of parsed) {
                    if (item.widgetId && !seen.has(item.widgetId)) {
                        seen.add(item.widgetId);
                        unique.push(item);
                    } else {
                        hasDupes = true;
                    }
                }
                if (hasDupes) {
                    setLayout(unique);
                    localStorage.setItem('arp_playground_layout', JSON.stringify(unique));
                }
            } catch (e) {
                // Ignore
            }
        }
    }, []);

    const [isEditMode, setIsEditMode] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isConfirmClearOpen, setIsConfirmClearOpen] = useState(false);
    const [pendingSelection, setPendingSelection] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Global Pulse');

    // Dynamic Categories from Shared Config
    const categories = getPlaygroundCategories();

    const filteredWidgets = widgetRegistry.filter(w => w.category === activeCategory);

    // Width hook
    const { width, ref } = useWidth();

    // Save layout on change
    const onLayoutChange = (currentLayout) => {
        // We need to merge the widgetId back into the layout items because RGL strips unknown props
        const mergedLayout = currentLayout.map(item => {
            const existing = layout.find(l => l.i === item.i);
            return { ...item, widgetId: existing ? existing.widgetId : 'unknown' };
        });
        setLayout(mergedLayout);
        localStorage.setItem('arp_playground_layout', JSON.stringify(mergedLayout));
    };

    const handleBatchAdd = () => {
        if (pendingSelection.length === 0) return;

        const newItems = [];
        pendingSelection.forEach(id => {
            // Double check not already present
            if (layout.some(item => item.widgetId === id)) return;

            const widgetDef = widgetRegistry.find(w => w.id === id);
            if (!widgetDef) return;

            newItems.push({
                i: `${widgetDef.id}-${Date.now()}-${Math.random()}`, // Unique ID
                x: 0, // RGL will handle placement
                y: Infinity, // Put at bottom
                w: widgetDef.defaultW,
                h: widgetDef.defaultH,
                widgetId: widgetDef.id
            });
        });

        setLayout([...layout, ...newItems]);
        setPendingSelection([]);
        setIsAddModalOpen(false);
    };

    const toggleSelection = (id) => {
        if (pendingSelection.includes(id)) {
            setPendingSelection(pendingSelection.filter(item => item !== id));
        } else {
            setPendingSelection([...pendingSelection, id]);
        }
    };

    const handleRemoveItem = (i) => {
        const newLayout = layout.filter(item => item.i !== i);
        setLayout(newLayout);
        localStorage.setItem('arp_playground_layout', JSON.stringify(newLayout));
    };

    const handleRemoveByWidgetId = (id) => {
        // Find the item with this widgetId
        const newLayout = layout.filter(item => item.widgetId !== id);
        setLayout(newLayout);
        localStorage.setItem('arp_playground_layout', JSON.stringify(newLayout));
    };

    const handleClearCanvas = () => {
        setIsConfirmClearOpen(true);
    };

    const confirmClearCanvas = () => {
        setLayout([]);
        localStorage.setItem('arp_playground_layout', JSON.stringify([]));
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-bg-app overflow-hidden transition-colors duration-300 relative">
            {/* Toolbar */}
            <div className="bg-bg-panel border-b border-border-base px-6 py-3 flex items-center justify-between shrink-0 z-20 shadow-sm relative">
                <div className="flex items-center gap-3">
                    <div className="bg-bg-active/10 p-2 rounded-lg text-bg-active">
                        <MdDashboardCustomize className="text-xl" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-text-primary">Playground</h2>
                        <p className="text-xs text-text-secondary">Free-form layout canvas</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Primary Action */}
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-bg-active text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-bg-active/90 shadow-lg shadow-bg-active/20 flex items-center gap-2 transition-all"
                    >
                        <MdAdd className="text-sm" /> Add Widgets
                    </button>

                    {/* Clear Button (only in edit mode) */}
                    {isEditMode && (
                        <button
                            onClick={handleClearCanvas}
                            className="text-xs text-electric-red font-bold hover:underline px-2"
                        >
                            Clear
                        </button>
                    )}

                    <div className="h-6 w-px bg-border-subtle"></div>

                    {/* Edit Mode Toggle */}
                    <button
                        onClick={() => setIsEditMode(!isEditMode)}
                        className={clsx(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all border",
                            isEditMode
                                ? "bg-deep-orange text-white border-deep-orange shadow-md shadow-deep-orange/20"
                                : "bg-bg-card text-text-secondary border-border-base hover:bg-bg-hover hover:text-text-primary"
                        )}
                    >
                        {isEditMode ? <><MdCheck /> Done Editing</> : <><MdEdit /> Edit Layout</>}
                    </button>
                </div>
            </div>

            {/* Grid Canvas */}
            <div ref={ref} className="flex-1 overflow-auto p-6 relative h-full w-full bg-bg-app">
                {/* Visual Grid Background */}
                {isEditMode && (
                    <div className="absolute inset-0 pointer-events-none z-0 opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}
                    ></div>
                )}

                <Responsive
                    width={width}
                    className="layout"
                    layouts={{ lg: layout }}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={10}
                    compactType={null}
                    preventCollision={true}
                    isDraggable={isEditMode}
                    isResizable={isEditMode}
                    onLayoutChange={onLayoutChange}
                    margin={[16, 16]}
                    draggableHandle=".drag-handle"
                >
                    {layout.map(item => {
                        const widget = widgetRegistry.find(w => w.id === item.widgetId);
                        if (!widget) return null;

                        return (
                            <div key={item.i} className={clsx("relative group", isEditMode && "ring-2 ring-dashed ring-border-active rounded-xl")}>
                                {/* Delete Button */}
                                {isEditMode && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.i); }}
                                        className="absolute -top-2 -right-2 bg-electric-red text-white p-1.5 rounded-full shadow-md z-50 hover:scale-110 transition-transform"
                                        title="Remove Widget"
                                    >
                                        <MdClose className="text-xs" />
                                    </button>
                                )}

                                {/* Drag Handle */}
                                {isEditMode && (
                                    <div className="drag-handle absolute inset-0 z-40 cursor-grab active:cursor-grabbing bg-bg-panel/10 hover:bg-bg-panel/20 transition-colors rounded-xl flex items-center justify-center backdrop-blur-[1px]">
                                        <div className="bg-bg-panel shadow-sm border border-border-base px-3 py-1.5 rounded-full text-[10px] font-bold text-text-primary flex items-center gap-1">
                                            <MdEdit className="text-xs" /> Drag to move
                                        </div>
                                    </div>
                                )}

                                <div className="h-full w-full pointer-events-auto">
                                    {widget.component}
                                </div>
                            </div>
                        );
                    })}
                </Responsive>

                {/* Empty State */}
                {layout.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                        <div className="text-center">
                            <MdDashboardCustomize className="text-6xl text-text-tertiary mx-auto mb-2" />
                            <p className="text-sm font-bold text-text-secondary">Canvas is empty</p>
                            <p className="text-xs text-text-tertiary">Click '+ Add Widgets' to start building</p>
                        </div>
                    </div>
                )}
            </div>

            {/* NEW: Multi-Select Modal with Sidebar */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsAddModalOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-bg-panel w-full max-w-4xl rounded-xl shadow-2xl border border-border-base flex flex-col h-[80vh] animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border-base shrink-0">
                            <div>
                                <h3 className="text-lg font-bold text-text-primary">Add Widgets</h3>
                                <p className="text-xs text-text-secondary">Navigate categories to find components</p>
                            </div>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-2 hover:bg-bg-hover rounded-full text-text-tertiary hover:text-text-primary transition-colors"
                            >
                                <MdClose className="text-lg" />
                            </button>
                        </div>

                        {/* Split Body */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Left Sidebar */}
                            <div className="w-1/4 min-w-[200px] border-r border-border-base bg-bg-subtle/30 overflow-y-auto p-4 space-y-1">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={clsx(
                                            "w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors flex justify-between items-center group",
                                            activeCategory === cat
                                                ? "bg-bg-active text-white shadow-md shadow-bg-active/20"
                                                : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
                                        )}
                                    >
                                        <span>{cat}</span>
                                        {/* Count Badge */}
                                        <span className={clsx(
                                            "text-[10px] px-1.5 rounded-full",
                                            activeCategory === cat ? "bg-white/20 text-white" : "bg-bg-subtle text-text-tertiary group-hover:bg-bg-active/10"
                                        )}>
                                            {widgetRegistry.filter(w => w.category === cat).length}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Right Grid */}
                            <div className="flex-1 overflow-y-auto p-6 bg-bg-app">
                                <h4 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
                                    {activeCategory}
                                    <span className="text-xs font-normal text-text-tertiary border-l border-border-subtle pl-2">
                                        {filteredWidgets.length} available
                                    </span>
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {filteredWidgets.map(widget => {
                                        const isAdded = layout.some(l => l.widgetId === widget.id);
                                        const isSelected = pendingSelection.includes(widget.id);

                                        return (
                                            <div
                                                key={widget.id}
                                                onClick={() => !isAdded && toggleSelection(widget.id)}
                                                className={clsx(
                                                    "flex flex-col items-start p-3 rounded-lg border text-left transition-all relative group h-full select-none cursor-pointer",
                                                    isAdded
                                                        ? "bg-bg-subtle border-border-base"
                                                        : isSelected
                                                            ? "bg-bg-active/5 border-bg-active shadow-sm ring-1 ring-bg-active"
                                                            : "bg-bg-card border-border-subtle hover:border-border-active hover:shadow-md"
                                                )}
                                            >
                                                <div className="flex justify-between w-full mb-2">
                                                    <div className={clsx(
                                                        "p-1.5 rounded text-white text-xs",
                                                        isAdded ? "bg-gray-500" : "bg-bg-active"
                                                    )}>
                                                        <MdDashboardCustomize />
                                                    </div>
                                                    {/* Status Icon */}
                                                    {isAdded ? (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleRemoveByWidgetId(widget.id);
                                                            }}
                                                            className="flex items-center gap-1 px-2 py-1 bg-electric-red/10 text-electric-red text-[10px] font-bold uppercase tracking-wider rounded border border-electric-red/20 hover:bg-electric-red hover:text-white transition-colors z-20"
                                                        >
                                                            Remove
                                                        </button>
                                                    ) : (
                                                        <div className={clsx(
                                                            "size-4 rounded border flex items-center justify-center transition-colors",
                                                            isSelected ? "bg-bg-active border-bg-active text-white" : "border-border-active bg-bg-card"
                                                        )}>
                                                            {isSelected && <MdCheck className="text-xs" />}
                                                        </div>
                                                    )}
                                                </div>
                                                <h4 className="text-xs font-bold text-text-primary">{widget.label}</h4>
                                                <p className="text-[10px] text-text-tertiary mt-0.5 line-clamp-1">
                                                    {widget.category || 'General'}
                                                </p>
                                            </div>
                                        );
                                    })}

                                    {/* Empty State for Filter */}
                                    {filteredWidgets.length === 0 && (
                                        <div className="col-span-full py-10 text-center text-text-tertiary">
                                            No widgets found in this category.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-border-base bg-bg-panel flex justify-between items-center shrink-0">
                            <span className="text-xs text-text-tertiary">
                                {pendingSelection.length > 0 ? `${pendingSelection.length} widget(s) selected` : 'Select widgets to add'}
                            </span>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleBatchAdd}
                                    disabled={pendingSelection.length === 0}
                                    className="px-4 py-2 bg-text-primary text-bg-panel rounded-lg text-xs font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-opacity"
                                >
                                    <MdAdd className="text-sm" />
                                    Add Selected ({pendingSelection.length})
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirm Clear Canvas Modal */}
            <ConfirmModal
                isOpen={isConfirmClearOpen}
                onClose={() => setIsConfirmClearOpen(false)}
                onConfirm={confirmClearCanvas}
                title="Clear Canvas"
                message="Are you sure you want to clear the entire canvas? This action cannot be undone and all widgets will be removed."
                confirmText="Clear All"
                cancelText="Cancel"
                type="danger"
            />
        </div>
    );
};

export default Playground;
