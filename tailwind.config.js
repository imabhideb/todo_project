/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'task': "url('C:/Users/Abhijit Deb/Desktop/ToDo/todo_project/src/Assets/task background.jpg')",
      },
      fontFamily:{
        todo: ['Kaushan Script', 'cursive']
      }
    },
  },
  plugins: [],
}
