import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [tailwindcss(), tanstackStart(), react()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    // Prebundle the portfolio's UI dependencies with React before the first
    // request, avoiding late optimization that can mix React module versions
    // in a preview tab kept open while dependencies are installed.
    include: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-slot",
    ],
  },
});
