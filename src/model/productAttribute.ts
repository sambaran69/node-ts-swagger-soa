import { prop, Typegoose } from "typegoose";

export class ProdcutAttribute extends Typegoose {
    @prop()
    name: string;
    @prop()
    value: string;
}