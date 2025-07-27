import { createServer } from "vite";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const port = parseInt(process.env.PORT || "5000", 10);

  // Create Vite server in middleware mode
  const vite = await createServer({
    configFile: path.resolve(__dirname, "../vite.config.ts"),
    server: { middlewareMode: true },
    appType: "spa"
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);
  
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch(console.error);