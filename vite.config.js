import { defineConfig } from 'vite'
import react     from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import glsl      from 'vite-plugin-glsl'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    // Enables importing .glsl / .vert / .frag files as raw strings.
    // This is what lets us do: import vertexShader from '../shaders/vertex.glsl'
    glsl({
      include:  ['**/*.glsl', '**/*.vert', '**/*.frag'],
      compress: false,   // Keep readable for debugging; set true in production
    }),
  ],
})
