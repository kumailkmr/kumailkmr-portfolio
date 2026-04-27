const fs = require('fs');
const pkg = {
  "name": "kumail-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@base-ui/react": "^1.4.1",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-toast": "^1.2.15",
    "@vercel/analytics": "^2.0.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.11.0",
    "next": "16.2.4",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.6.0",
    "resend": "^6.12.2",
    "shadcn": "^4.5.0",
    "tailwind-merge": "^3.5.0",
    "react-parallax-tilt": "^1.6.1",
    "react-tsparticles": "^3.5.0",
    "tsparticles": "^3.5.0",
    "@react-three/fiber": "^8.15.9",
    "@react-three/drei": "^9.84.4",
    "three": "^0.163.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
