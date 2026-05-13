/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "outline": "#757873",
        "tertiary-fixed-dim": "#e9c176",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-container": "#8d6d2b",
        "primary-fixed-dim": "#c7c7c3",
        "primary-fixed": "#e3e2df",
        "surface-container-highest": "#e2e2e2",
        "inverse-primary": "#c7c7c3",
        "outline-variant": "#c5c7c1",
        "surface-tint": "#5e5f5c",
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9f9",
        "secondary": "#5f5e5e",
        "surface-dim": "#dadada",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#5d4201",
        "on-tertiary-fixed": "#261900",
        "on-primary-fixed": "#1b1c1a",
        "primary": "#5e5f5c",
        "primary-container": "#f9f8f4",
        "on-primary-fixed-variant": "#464744",
        "surface-container-high": "#e8e8e8",
        "on-secondary-fixed-variant": "#474646",
        "secondary-container": "#e5e2e1",
        "background": "#f9f8f4",
        "inverse-on-surface": "#f1f1f1",
        "surface-variant": "#e2e2e2",
        "on-surface": "#1a1c1c",
        "inverse-surface": "#0a0a0a",
        "on-surface-variant": "#454843",
        "secondary-fixed-dim": "#c9c6c5",
        "tertiary": "#c5a059",
        "secondary-fixed": "#e5e2e1",
        "error": "#ba1a1a",
        "on-primary-container": "#71726f",
        "tertiary-container": "#fff7ef",
        "surface-container-low": "#f4f3f3",
        "error-container": "#ffdad6",
        "on-secondary-container": "#656464",
        "tertiary-fixed": "#ffdea5",
        "on-secondary": "#ffffff",
        "surface": "#f9f8f4",
        "surface-container": "#eeeeee",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#1c1b1b",
        "on-background": "#1a1c1c",
        "on-tertiary": "#ffffff"
      },
      "borderRadius": {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px"
      },
      "spacing": {
        "unit": "8px",
        "border-width": "0.5px",
        "margin-page": "64px",
        "element-gap": "24px",
        "section-gap": "160px"
      },
      "fontFamily": {
        "display-xl": ["Noto Serif", "serif"],
        "headline-lg": ["Noto Serif", "serif"],
        "technical-data": ["Space Grotesk", "monospace"],
        "label-caps": ["Space Grotesk", "sans-serif"],
        "body-airy": ["Inter", "sans-serif"]
      },
      "fontSize": {
        "display-xl": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "200" }],
        "headline-lg": ["40px", { "lineHeight": "1.2", "fontWeight": "300" }],
        "technical-data": ["14px", { "lineHeight": "1.5", "letterSpacing": "0.05em", "fontWeight": "400" }],
        "label-caps": ["11px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "body-airy": ["16px", { "lineHeight": "1.8", "letterSpacing": "0.01em", "fontWeight": "300" }]
      }
    },
  },
  plugins: [],
}
