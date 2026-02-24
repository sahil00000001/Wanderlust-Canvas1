import type { Express } from "express";
import { type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Static site doesn't need API routes for now
  // If needed, they can be added here with /api prefix
  
  return httpServer;
}
