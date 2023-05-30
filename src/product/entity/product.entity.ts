import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Product{
    @Prop({type:String,required:true})
    name:string;

    @Prop({type:Number,required:true})
    price:number;
}

export const ProductSchema = SchemaFactory.createForClass(Product)