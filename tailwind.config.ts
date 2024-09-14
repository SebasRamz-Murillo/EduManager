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
          0: "#FFFFFF",
          10: "#FAFAFA",
          20: "#F5F4F4",
          30: "#EBEBEB",
          40: "#C7C7C7",
          50: "#AEAEAE",
          60: "#888888",
          70: "#626262",
          80: "#545454",
          90: "#3D3D3D",
          100: "#171717",
        },
        primary: {
          5: "#F1F2FF",
          10: "#D4D7FA",
          20: "#ACAFF6",
          30: "#7D82E5",
          40: "#585DCC",
          50: "#2A2FAB",
          60: "#1E2293",
          70: "#15187B",
          80: "#0D0F63",
          90: "#080952",
          100: "#01012B",
        },
        semanticDanger: {
          20: "#FDD2C3",
          30: "#FAB3A4",
          40: "#F6958C",
          50: "#F16667",
          0: "#FEF5F0",
          10: "#FEEBE1",
          60: "#CF4B56",
          70: "#B31F33",
          80: "#8B203C",
          90: "#731334",
          100: "#4D0920",
        },
        semanticWarning: {
          5: "#FEF8E7",
          10: "#FEF1CF",
          20: "#FADC9B",
          30: "#F1C068",
          40: "#F6B14A",
          50: "#F18D11",
          60: "#B35E08",
          70: "#964806",
          80: "#793403",
          90: "#642602",
        },
        semanticInfo: {
          0: "#EFFEFF",
          10: "#CCFDFE",
          20: "#B2FDFE",
          30: "#8CF3FD",
          40: "#40CFFB",
          50: "#40CFFB",
          60: "#2EA3D7",
          70: "#0166B3",
          100: "#0B2A4C",
        },
        semanticSuccess: {
          0: "#F1FCE6",
          10: "#E3F9CE",
          20: "#C8F39E",
          30: "#B9E98D",
          40: "#6AB73F",
          50: "#6AB73F",
          60: "#4F9D2E",
          70: "#37831F",
          80: "#226A14",
          90: "#14570C",
          100: "#11480B",
        },
        circleColor: {
          10: "#12b76a",
          20: "#efffff",
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
