import { createServer } from "vite";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const port = parseInt(process.env.PORT || "5000", 10);

  // Add CORS middleware
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  // Create Vite server in middleware mode
  const vite = await createServer({
    configFile: path.resolve(__dirname, "../vite.config.ts"),
    server: { 
      middlewareMode: true,
      cors: true,
      hmr: {
        port: 24678,
      },
    },
    appType: "spa"
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);
  
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
    console.log(`Access the site at: https://${process.env.REPL_SLUG || 'your-repl'}.${process.env.REPL_OWNER || 'your-username'}.replit.dev`);
  });
}

startServer().catch(console.error);