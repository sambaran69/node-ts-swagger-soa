import { arrayProp, pre, prop, Typegoose } from "typegoose";
import { ProdcutAttribute } from "./productAttribute";

// @pre<Product>("save", async function() {
//     if (this.isNew) {
//     }

//     if (this.isModified("name")) {
//     }
// })

export class Product extends Typegoose {
    @prop()
    public productId: number;
    @prop({ required: true })
    public name: string;
    @prop()
    public description?: string;
    @prop({ required: true })
    public price: number;
    @arrayProp({ items: ProdcutAttribute })
    public features?: ProdcutAttribute[];
}

export const ProductModelMongo = new Product().getModelForClass(Product, {schemaOptions: {timestamps: true}});
