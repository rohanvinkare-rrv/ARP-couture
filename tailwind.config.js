/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "charcoal-base": "#050505",
                "slate-panel": "#0f0f12",
                "slate-card": "#16161a",
                "border-muted": "#222226",
                "electric-red": "#ff3b30",
                "lime-green": "#32d74b",
                "deep-orange": "#ff9f0a",
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
