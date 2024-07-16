import mongoose, {Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const videoSchema= new Schema({
    videoFile:{
        type:String, //cloudinary url
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        defualt:0
    },
    isPublished:{
        type:Boolean,
        defualt:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema)