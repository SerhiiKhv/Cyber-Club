/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            primary: '#f5385D',
            pacificblue: '#0092ca',
            washedBlack: '#1f272b',
            washedWhite: '#e0d8be',
            cardinGreen: '#0c1c1c',
            bristolBlue: '#518d8d',

        },
        backgroundImage: {
            'price': "url('/src/Assets/Background/PriceBackground.jpg')",
        },
        height:{
            '40rem': '40rem',
            "90vh": '90vh'
        }
    },
  },
  plugins: [],
}

