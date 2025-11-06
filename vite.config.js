import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dev-portfolio/', // GitHub Pages에서 사용할 리포지토리 이름으로 변경하세요
})

