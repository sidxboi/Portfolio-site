import { createServer } from "vite";
import path from "path";

async function startServer() {
  try {
    const server = await createServer({
      configFile: path.resolve(process.cwd(), "vite.config.ts"),
      server: {
        host: "0.0.0.0",
        port: 5000,
      },
    });

    await server.listen();
    console.log("Portfolio dev server running on http://0.0.0.0:5000");
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();