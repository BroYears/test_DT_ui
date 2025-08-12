// vite.config.ts

import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(), // React 지원 플러그인
        reactRouter({
            // React Router를 Vercel 플랫폼에 맞게 설정
            adapter: 'vercel',
        }),
        tsconfigPaths(),
        tailwindcss(),
    ],
});