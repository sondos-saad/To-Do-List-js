/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        colors:{
            yellow : '#E5D283',
            body:'#4F709C',
            background:'#F0F0F0',
            grey:'#D8D9DA',
            green:'#CCD5AE',
            darkGreen:'#617A55'
        },
      extend: {
        fontFamily: {
            Comic:['Comic Neue', 'cursive'] ,
            Dancing: ['Dancing Script', 'cursive']
          }
        
      },
    },
    plugins: [],
  }