import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  vite: {
    ssr: { external: ["drizzle-orm"] },
     plugins: [
      tailwindcss(),
      viteTsconfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ]
  },
});
