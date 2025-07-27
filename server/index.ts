import { createServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const port = parseInt(process.env.PORT || "5000", 10);

  // Create Vite server with better Replit configuration
  const vite = await createServer({
    configFile: path.resolve(__dirname, "../vite.config.ts"),
    server: { 
      port: port,
      host: "0.0.0.0",
      cors: true,
      allowedHosts: [
        "robochargers.replit.app",
        "new.robochargers.io",
        "localhost",
        ".replit.dev",
        ".replit.app",
        ".replit.co"
      ],
      hmr: {
        clientPort: 443, // Use HTTPS port for HMR
        host: "0.0.0.0"
      },
    },
    appType: "spa"
  });

  await vite.listen();
  
  console.log(`Server running on http://0.0.0.0:${port}`);
  console.log(`Custom domains: robochargers.replit.app, new.robochargers.io`);
}

startServer().catch(console.error);