/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Убедись, что указаны все возможные расширения
  ],
  theme: {
    extend: {
      colors: {
        'grey' : '#EBEBEB',
        'blue' : '#01b9c4',
        'orange' : '#FD4D35'
      },
      fontFamily: {
        "Bebas": ['Bebas', 'sans-serif'],
        "PT-Root" : ['PT-Root', 'sans-serif'],
        "PT-Root-Medium" : ['PT-Root-Medium', 'sans-serif'],
        "Rubik":['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
};