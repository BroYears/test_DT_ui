/** @type {import('postcss-load-config').Config} */
import tailwindcss from '@tailwindcss/postcss'; // 새로 설치한 패키지를 import
import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        tailwindcss,
        autoprefixer,
    ],
};

export default config;
