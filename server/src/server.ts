import * as dotenv from "dotenv";

import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import { buildProviderModule } from "inversify-binding-decorators";
import * as logger from "morgan";

// TSOA automatically generates the routes from the annotations in the controller classes
import { iocContainer } from "./ioc";
import { RegisterRoutes } from "./routes";

// We still need to import the controller to have them crawled by the generator
import { ApiController } from "./controller/api.controller";
import { ProductsController } from "./controller/product.controller";

iocContainer.load(buildProviderModule());

// Swagger support
import * as swaggerUI from "swagger-ui-express";

const server = express();

// Load environment variables from .env file
dotenv.config({ path: `${server.get("env")}.env` });

/**
 * Establish MongoDB connection.
 * Needs to be after dotenv was loaded
 */
import "./config/mongodb";

// Configure ExpressJS Middleware
server.use(logger(process.env.MORGAN_LOGGER));

server.use(cors());
server.options("*", cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/**
 * RouteHandler.
 */
RegisterRoutes(server);

// Serve the swagger ui at /api-docs
// tslint:disable-next-line
const swaggerDocument = require("../dist/swagger/swagger.json");
server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

server.listen(process.env.PORT, () => {
    console.log("Server is running at PORT: %s env: %s", process.env.PORT, server.get("env"));
});

module.exports = server;
