const { type } = require('express/lib/response');
const mongoose=require('mongoose');
const schema=mongoose.Schema;

const ProductSchema=new schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    skus:[
        {
            sku:{
                type:String
            },
            price:{
                type:Number
            },
            quantity:{
                type:Number
            }
        }
    ]

})