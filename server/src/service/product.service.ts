import "reflect-metadata";

import { provideSingleton } from "../ioc";
import { Product, ProductModelMongo } from "../model/product";

@provideSingleton(ProductService)
export class ProductService {
    public getProducts(): Promise<Product[] | any> {
        const query = ProductModelMongo.find();
        return query.exec();
    }

    public createProduct(product: Product): Promise<Product | any> {
        const newProduct = new ProductModelMongo(product);
        return newProduct.save();
    }

    public async updateProduct(id: number, item: any): Promise<Product | any> {
        const found: any = await ProductModelMongo.findOne({productId: id});
        for (const key of Object.keys(item)) {
            if (item[key] !== undefined) { found[key] = item[key]; }
        }
        return found.save();
    }

    public async removeProduct(id: number): Promise<Product | any> {
        const found = await ProductModelMongo.findOne({productId: id});
        return found.remove();
    }
}
