import { prop, Typegoose, arrayProp } from "typegoose";
import { ProdcutAttribute } from "./productAttribute";

export class Product extends Typegoose {
    @prop()
    productId: number;
    @prop({ required: true })
    name: string;
    @prop()
    description?: string;
    @prop({ required: true })
    price: number;
    @arrayProp({ items: ProdcutAttribute })
    features?: ProdcutAttribute[];
}

export const ProductModelMongo = new Product().getModelForClass(Product);
