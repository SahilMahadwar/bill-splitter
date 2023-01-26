import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [react()],
    envDir:
      process.env.NODE_ENV === "development"
        ? path.join(__dirname, "../")
        : path.join(__dirname, "./"),
  });
};
