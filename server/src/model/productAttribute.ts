import { prop, Typegoose } from "typegoose";

export class ProdcutAttribute extends Typegoose {
    @prop()
    public name: string;
    @prop()
    public value: string;
}
