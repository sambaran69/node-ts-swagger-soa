# node-ts-swagger-soa
Node.js, Typescript, Swagger API following clean architecture principles.

The REST services are built using Express, Tyepscript and Swagger. Inclusive automatic swagger.json and route creation from controller-modules. 

Enhanced by Inversify to enable dependency injection (DI)

I used [tsoa](https://www.npmjs.com/package/tsoa) for automatic Swagger doc generation, [InversifyJS](https://github.com/inversify/InversifyJS) for DI, [ExpressJS](https://expressjs.com/) as server and enhanced it with [Typescript](typescriptlang.org)
A Typescript way of connection to mongoDB is provided by [typegoose](https://github.com/szokodiakos/typegoose)


Look at https://www.npmjs.com/package/tsoa for more information about Swagger generation and usage of Inversify with tsoa

## MongoDB
It includes a connection to mongoDB. The location of the database is defined in ```src/config/mongodb.ts```.
This will have to be modified as per you local mongo database. There is no seeding necessary as the same can be done through the CRUD interface in Swagger.

## Swagger
The swagger generated API doc is available at http://localhost:3000/api-doc

## Commands
* **instalation:** `npm install`
* **dev:** `npm start` *This builds tsoa routes, swagger definitions and starts the server on development mode listening to file changes (swagger definition changes will require a manual restart)*
* **test:** `npm test` *unit and integration tests*
* **lint:** `npm tslint` *check the code for linting errors*
* **build:** `npm build` *production build*