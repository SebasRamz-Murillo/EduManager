import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
      },
      boxShadow: {
        "shadows-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "shadows-sm":
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        "shadows-md":
          "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        "shadows-lg":
          "0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.1)",
        "shadows-xl":
          "box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.1)",
        "shadows-2xl": "box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
        "shadows-3xl": "0px 32px 64px - 12px rgba(16, 24, 40, 0.2)",
      },
      screens: {
        sm: "320px",
        md: "744px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        body: ["Roboto", "Arial", "sans-serif"],
        title: ["Red Hat Display", "Arial", "sans-serif"],
      },
      colors: {
        gray: {
          0: "var(--color-gray-0)",
          10: "var(--color-gray-10)",
          20: "var(--color-gray-20)",
          30: "var(--color-gray-30)",
          40: "var(--color-gray-40)",
          50: "var(--color-gray-50)",
          60: "var(--color-gray-60)",
          70: "var(--color-gray-70)",
          80: "var(--color-gray-80)",
          90: "var(--color-gray-90)",
          100: "var(--color-gray-100)",
        },
        primary: {
          10: "var(--color-primary-10)",
          20: "var(--color-primary-20)",
          30: "var(--color-primary-30)",
        },
        success: {
          10: "var(--color-success-10)",
          20: "var(--color-success-20)",
          50: "var(--color-success-50)",
          70: "var(--color-success-70)",
        },
        warning: {
          10: "var(--color-warning-10)",
          20: "var(--color-warning-20)",
          50: "var(--color-warning-50)",
          70: "var(--color-warning-70)",
        },
        error: {
          10: "var(--color-error-10)",
          20: "var(--color-error-20)",
          50: "var(--color-error-50)",
          70: "var(--color-error-70)",
        },
        info: {
          10: "var(--color-info-10)",
          20: "var(--color-info-20)",
          50: "var(--color-info-50)",
          70: "var(--color-info-70)",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDownOut: {
          "80%": { transform: "translateY(50%)", opacity: "1" },
          "100%": { transform: "translateY(50%)", opacity: "0" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-down": "slideDown 0.7s ease-out forwards",
        "slide-down-out": "slideDownOut 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
        "slide-out-right": "slideOutRight 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
