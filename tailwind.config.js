/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeBg1: 'rgba(249, 245, 240, 1)',
        themeBg2: 'rgba(240,250,244,1)',
        themeColor2: 'rgba(1,153,99,1)',
        themeColor3: 'rgba(161,130,74,1)'
      },
      fontFamily: {
        Jakata: ['plus-jakarta-sans, sans-serif'
        ],
        
        inter:[
          'Inter, sans-serif'
        ]
      }
    },
  },
  plugins: [],
}

