## mini project 1 - mood tracker app
 objective of this is to get a understanding of components , props and state management

#### step & instruction to follow to create the project

1. create a new project using 
   -
 ```
  npm create vite@latest
 ```
2. install tailwindcss for styling (optional)
   -
```
npm i tailwindcss @tailwindcss/vite
```
3. initialize tailwindcss in your project
    -
    add in vite.config.js
 ```
 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite" {/*import tailwindcss*/}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() {/*call tailwindcss here*/}
  ],
})
 ```