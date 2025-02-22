import { server } from "./www/server.js";
import config from "./lib/config.js";
import initializeDatabase from "./lib/database.js";

(async () => {
  try {
    await initializeDatabase();
    const port = parseInt(config.getOrThrow("PORT"));
    server.listen(port, () => {
      console.info(`The application is running on http:localhost:${port}`);
    });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})()