/**
 * UCP Demo Server Entry Point
 *
 * Main Hono application setup and routing configuration.
 * This is used by the server.ts when running locally.
 */

import { Hono } from "hono";
import { cors } from "hono/cors";
import { discoveryRouter } from "./discovery.js";
import { checkoutRouter } from "./checkout.js";

export const app = new Hono();

// CORS for browser/agent access
app.use("*", cors());

// UCP Discovery endpoint - The main entry point for any platform
app.route("/.well-known/ucp", discoveryRouter);

// Shopping API
app.route("/api/shopping", checkoutRouter);

// Health check
app.get("/health", (c) => c.json({ status: "ok", protocol: "UCP", version: "2026-01-11" }));

