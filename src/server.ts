import * as dotenv from "dotenv";

import * as express from "express";
import * as logger from "morgan";

const server = express();

// Load environment variables from .env file
dotenv.config({ path: `${server.get("env")}.env` });

// Configure ExpressJS Middleware
server.use(logger(process.env.MORGAN_LOGGER));

server.listen(process.env.PORT, () => {
    console.log("Server is running at PORT: %s env: %s", process.env.PORT, server.get("env"));
});

module.exports = server;