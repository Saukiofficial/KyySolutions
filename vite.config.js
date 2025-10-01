import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            // Daftarkan semua file entri (entry points) Anda di sini
            input: [
                'resources/css/app.css',
                'resources/js/app.js',     // Untuk Admin Panel (Blade)
                'resources/js/app.jsx',    // Untuk Landing Page (React)
            ],
            refresh: true,
        }),
        react(),
    ],
});
