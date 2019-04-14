// IMPORTANT: reflect-metadata needs to be imported otherwise the dependency injection won't work
import "reflect-metadata";
import { Body, Controller, Delete, Get, Post, Put, Route } from "tsoa";
import { provideSingleton } from "../ioc";

import { Product } from "../model/product";
import { ProductService } from "../service/product.service";

@Route("Products")
@provideSingleton(ProductsController)
export class ProductsController extends Controller {
    /**
     * Injection of objects is possible without the @inject decorator because TS exports the needed
     * metadata automatically when we use 'reflect-metadata'
     */
    constructor(private productService: ProductService) {
        super();
    }

    @Get()
    public async getProducts(): Promise<Product[]> {
        return this.productService.getProducts().then(
            async (products) => {
                console.log("Product name: " + products[0].name);
                return await products;
            }).catch((error) => console.log(`getProducts error: ${error}`));
    }

    @Post()
    public async createProduct(@Body() body: Product): Promise<Product> {
        return this.productService.createProduct(body).then((created) => {
            console.log("Product created: " + created.name);
            return created;
        }).catch((error) => console.log(`createProduct error: ${error}`));
    }

    @Put("{id}")
    public async updateProduct(id: number, @Body() body: Product): Promise<Product> {
        return this.productService.updateProduct(id, body).then((updated) => {
            console.log("Product updated: " + updated.name);
            return updated;
        }).catch((error) => console.log(`updateProduct error: ${error}`));
    }

    @Delete("{id}")
    public async deleteProduct(id: number): Promise<Product> {
        return this.productService.removeProduct(id).then((deleted) => {
            console.log("Product deleted: " + deleted.name);
            return deleted;
        }).catch((error) => console.log(`deleteProduct error: ${error}`));
    }
}
