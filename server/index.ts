import { createServer } from "vite";
import { preview } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const port = parseInt(process.env.PORT || "5000", 10);
  
  // Check if we should run in preview mode (production build)
  if (process.env.NODE_ENV === "production") {
    // Serve the built files
    const server = await preview({
      configFile: path.resolve(__dirname, "../vite.config.ts"),
      preview: {
        port: port,
        host: "0.0.0.0",
        cors: true,
      }
    });
    
    await server.listen();
    console.log(`Production server running on http://0.0.0.0:${port}`);
  } else {
    // Development server with minimal HMR issues
    const vite = await createServer({
      configFile: path.resolve(__dirname, "../vite.config.ts"),
      server: { 
        port: port,
        host: "0.0.0.0",
        cors: true,
        strictPort: false,
        hmr: false, // Disable HMR to avoid connection issues
      },
      appType: "spa"
    });

    await vite.listen();
    console.log(`Development server running on http://0.0.0.0:${port}`);
    console.log(`Note: Hot Module Replacement disabled to prevent connection errors`);
  }
  
  console.log(`Custom domains: robochargers.replit.app, new.robochargers.io`);
}

startServer().catch(console.error);