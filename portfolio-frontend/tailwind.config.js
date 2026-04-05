export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: "#0f172a",
                    DEFAULT: "#3b82f6",
                    light: "#60a5fa",
                },
                secondary: {
                    dark: "#1e293b",
                    DEFAULT: "#8b5cf6",
                    light: "#a78bfa",
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",

                // Gold glow for light mode
                "border-glow-light": "borderGlowLight 2s ease-in-out infinite",
                // Silver glow for dark mode
                "border-glow-dark": "borderGlowDark 2s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },

                // 🌟 Gold border glow animation
                borderGlowLight: {
                    "0%, 100%": {
                        boxShadow: "0 0 0 2px rgba(255,215,0,0.5), 0 0 20px rgba(255,215,0,0.2)",
                    },
                    "50%": {
                        boxShadow: "0 0 0 6px rgba(255,215,0,0.4), 0 0 40px rgba(255,215,0,0.2)",
                    },
                },

                // 🌟 Silver border glow animation for dark mode
                borderGlowDark: {
                    "0%, 100%": {
                        boxShadow: "0 0 0 2px rgba(192,192,192,0.5), 0 0 20px rgba(192,192,192,0.2)",
                    },
                    "50%": {
                        boxShadow: "0 0 0 6px rgba(192,192,192,0.4), 0 0 40px rgba(192,192,192,0.2)",
                    },
                },
            },
        },
    },
    plugins: [],
};