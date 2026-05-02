// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    light: '#ECC974',
                    DEFAULT: '#D4AF37',
                    dark: '#B08D28',
                },
                dark: {
                    DEFAULT: '#111111',
                    card: '#1A1A1A',
                }
            }
        },
    },
    plugins: [],
}
