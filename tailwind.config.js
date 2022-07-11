const colors = require('tailwindcss/colors')

module.exports = {
    important: true,
    content: [],
    theme: {
        extend: {
                colors: {
                'primary': '#1B208C',
                'secondary': '#ecc94b',
                'blue-light': '#787CBF',
                'white': '#FFFFFF',
                'gray-dark': colors.gray[300],
                'gray-light': '#F2F2F0',
                'gray-thin' : colors.gray[50],
                'gray':colors.gray[500],
                'black': '#000000',
                'yellow':'#F2BC79',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}