// IMPORTANT: reflect-metadata needs to be imported otherwise the dependency injection won't work
import "reflect-metadata";
import { Controller, Get, Route } from "tsoa";
import { provideSingleton } from "../ioc";

@Route("Api")
@provideSingleton(ApiController)
export class ApiController extends Controller {
    @Get()
    public async getApi(): Promise<string> {
        console.log("get API");
        return await Promise.resolve("getApi");
    }
}
