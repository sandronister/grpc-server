import * as mongoose from "mongoose";


export const ProductSchema = new mongoose.Schema({
    name:String, 
    price:Number
})

export class Product{
    name:string;
    price:number;
}