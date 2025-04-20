import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication routes and middleware
  setupAuth(app);

  // Check authentication before allowing access to protected routes
  app.use("/api/protected", (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    next();
  });

  // Example of a protected route
  app.get("/api/protected/data", (req, res) => {
    res.json({ message: "This is protected data" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
