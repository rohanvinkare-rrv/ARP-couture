# Agentic Retail Platform (ARP)

> **Frontend Architecture & Wireframe Guide** | Document Version: 1.0  
> Powered by **Couture.ai**

![Version](https://img.shields.io/badge/version-1.0-blue.svg) ![Status](https://img.shields.io/badge/status-Live%20Beta-success.svg) ![Security](https://img.shields.io/badge/security-RBAC%20Ready-orange.svg)

## � Executive Summary: Platform Sitemap

The **Agentic Retail Platform (ARP)** is a high-density intelligence command center designed for retail leaders. The platform consists of **6 Primary Modules** designed for "Max Density" information display:

1.  **The Command Center (Landing Page)**
    *   *Theme*: "The Cockpit" – Immediate status, critical alerts, and daily priorities.
2.  **Forecast Explorer (Demand Planning)**
    *   *Theme*: "The Super Grid" – High-performance data table for editing and analyzing future demand.
3.  **Inventory & Network Health**
    *   *Theme*: Geo-Intelligence – Visualizing stock location and risks across the map.
4.  **Comparison Studio (Analytics)**
    *   *Theme*: "The Analyst’s Sandbox" – Deep-dive comparison between stores, regions, or products.
5.  **Commercial & Promo Playground**
    *   *Theme*: Simulation & Strategy – Planning marketing events and predicting their impact.
6.  **Smart Replenishment (Supply)**
    *   *Theme*: Execution – Managing Purchase Orders (POs) and vendor relationships.

---

## 🚀 Module Details

### 1. The Command Center (Landing Page)
**Goal**: To present a consolidated view of the business immediately upon login, requiring *zero clicks* to see critical risks.

#### **A. Visual Layout & Key Components**
*   **The "Pulse" Ticker (Top Fixed Bar)**: Horizontal scrollable bar with high-level KPIs (Sales ₹, Margin %, Turn, Fill Rate).
    *   *MoM Comparison*: "Sparklines" in every box showing Month-on-Month trends.
    *   *Visuals*: Green arrow ▲ 12% vs Last Month | Red arrow ▼ 5% vs Last Year.
*   **The Morning Brief (Hero Section)**: Personalized greeting (e.g., "Good Morning, Rohan") and a **"To-Do" List** of 3-5 critical decisions requiring approval.
*   **The Performance Grid (3-Column Layout)**:
    1.  **Top Performers**: Tabbed rankings [By Brand / Item / Category] showing Sales Value & Contribution %.
    2.  **Regional Benchmarking**: Bar chart comparing "My Store" vs. "Region Average" vs. "Top Store in Area". (e.g., *"You are trailing the Area Average by 15% in Footwear"*).
    3.  **Opportunity Spotter**: Displays top-selling items in the region missing from current assortment. *Action: [Button: Add to Assortment]*.

#### **⚡ The Agentic Layer (AI Features)**
*   **Agentic Alerts**: The system doesn't just report problems; it suggests solutions.
    *   *Scenario*: "Stockout Risk: Nike Air Max in Indiranagar."
    *   *AI Action*: "Suggested Transfer: 5 units from Koramangala Store."
    *   *Interaction*: Buttons to **[Approve Transfer]** or **[Ignore]**.
*   **Prioritization Engine**: AI automatically ranks alerts by financial impact.

---

### 2. Forecast Explorer
**Theme**: "The Super Grid"  
**Goal**: Replace Excel with a high-density, browser-based table for massive demand planning datasets.

#### **A. Visual Layout & Key Components**
*   **Filter & Context Bar**: Dropdowns for Category, Brand, Region, Time Grain. Toggles for [Show History] / [Show AI Confidence].
*   **The Super Grid (Main Data Table)**:
    *   *Fixed Columns*: Product Hierarchy (Category > Brand > Item > SKU).
    *   *History (Context)*: LY Sales, LM Sales (with mini-bar charts).
    *   *The Forecast*: Baseline Forecast, Uplift Factors (New Product/Promo), Total System Forecast.
    *   *Comparison*: Delta % vs LY and vs Budget.
*   **The "Why" Panel**: Collapsible drawer showing item contribution pie charts and accuracy tracking.

#### **⚡ The Agentic Layer (AI Features)**
*   **Confidence Shading**: Cells colored by AI certainty (Dark Green = High Confidence, Light Green = Low/Volatile).
*   **Anomaly Detection**: Red triangles on unusual values (>3x history). Click to reveal reasoning (e.g., *"Spike due to upcoming Diwali Promo logic"*).
*   **NPI Tagging**: Auto-detection of "New Product Introduction" items with sales predictions based on "Similar Product" logic.

---

### 3. Inventory & Network Health
**Theme**: "Geo-Intelligence"  
**Goal**: Visualize physical stock locations and identify redistribution opportunities.

#### **A. Visual Layout & Key Components**
*   **Split Layout**: 50% Map / 50% Data.
*   **Left Pane: The Risk Map**: Interactive map with Smart Pins.
    *   🔴 Red Halo: Stockout Risk (< 3 Days Supply).
    *   🟡 Yellow Halo: Warning (< 7 Days).
    *   🔵 Blue Halo: Overstock (> 90 Days / Dead Stock).
*   **Right Pane: The Action List**:
    *   *Tab 1*: Stockout Risks (with "Days Left" countdown).
    *   *Tab 2*: Slow Movers (Aging inventory list).

#### **⚡ The Agentic Layer (AI Features)**
*   **The Redistribution Agent**: AI scans the network for balance.
    *   *Proposal*: "Move 50 Shirts from Store A (Overstock) to Store B (Risk)."
    *   *Impact*: "Estimated Sales Recovery: ₹50,000."
    *   *Action*: One-click **[Approve Move]**.

---

### 4. Comparison Studio
**Goal**: Deep-dive comparisons between any two entities (Stores, Regions, Brands) to spot gaps.

#### **A. Visual Layout & Key Components**
*   **Battle Mode**: Side-by-side dropdown selectors [Entity A] vs. [Entity B].
    *   *Metrics*: Sales Density, Inventory Turns, Discount %.
    *   *Heatmap*: Which Categories are winning in Store A vs. Store B?
*   **The Scatter Plot Matrix**:
    *   *X-Axis*: Stock Cover (Days). *Y-Axis*: Rate of Sale (Velocity).
    *   *Key Quadrants*: "Lost Sales Risk" (High Sales, Low Stock) vs. "Dead Cash" (Low Sales, High Stock).

#### **⚡ The Agentic Layer (AI Features)**
*   **Bulk Action Lasso**: Draw a circle around "Lost Sales Risk" dots.
    *   *AI Response*: "You selected 15 items. Create Purchase Order?"
*   **Insight Generation**: "Store A sells 20% more Menswear than Store B. Suggest aligning assortment."

---

### 5. Commercial & Promo Playground
**Theme**: "Simulation & Strategy"  
**Goal**: Manage marketing calendar and simulate financial impact *before* launch.

#### **A. Visual Layout & Key Components**
*   **The Promo Calendar (Gantt Chart)**: Visual timeline of campaigns ("Summer Sale", "Diwali").
    *   *Conflict Detector*: Overlapping promos on same category turn Red ("Cannibalization Risk").
*   **"What-If" Simulator Panel**:
    *   *Inputs*: Scope (e.g., Men's Shoes), Mechanic (e.g., Flat 40% Off), Slider (10%-50%).

#### **⚡ The Agentic Layer (AI Features)**
*   **Real-time Prediction**: As the slider moves, AI updates:
    *   *Volume*: "Predicted Uplift: +400 Units"
    *   *Financials*: "Revenue: +₹10L | Margin Impact: -₹2L"
    *   *Inventory Risk*: "⚠ Warning: You will stock out on Day 5."

---

### 6. Supply & Vendor Management
**Theme**: "Smart Execution"  
**Goal**: Handle Purchase Orders (POs) and manage supplier relationships.

#### **A. Visual Layout & Key Components**
*   **The Smart PO Table**: Rows ranked by "Urgency" (Run-out Date minus Lead Time).
    *   *Columns*: Product Info, Current Stock, Forecast, ROP, Suggested Qty.
*   **Vendor Scorecard Widget**: Performance data for the selected item's vendor (e.g., "On-Time Delivery Rate: 85%").

#### **⚡ The Agentic Layer (AI Features)**
*   **Smart Quantity Calculation**:
    *   *Urgency Score*: Prioritizes orders based on stockout proximity.
    *   *Constraint Handling*: Auto-rounds orders to Vendor MOQ (Minimum Order Quantity).
*   **Vendor Selection Agent**: Suggests the best vendor (Price vs. Speed) for multi-source items.

---

## 🛠️ Technical Setup

### Prerequisites
*   Node.js (v18+)
*   npm or yarn

### Installation
1.  **Clone the repository**
    ```bash
    git clone https://github.com/rohanvinkare-rrv/ARP-couture
    cd arp-dashboard
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    ```
3.  **Run Development Server**
    ```bash
    npm run dev
    ```

**© 2026 Couture.ai** | Agentic Retail Platform
