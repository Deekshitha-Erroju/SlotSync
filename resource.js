import {Schema,model} from "mongoose"

const ResourceSchema= new Schema({
    name:{
        type:String,
        require:[true,"You are required to enter the name of the resource"],
        minLength:[3,"Resource name must be of minimum length 3"],
        maxLength:[20,"Resource name must be of length less than 20"],
        trim:true
    },
    type: {
       type: String,
       enum: {
          values: ["study room", "library", "auditorium"],
          message: "invalid type"
       },
       trim: true
    },
    capacity:{
        type:Number,
        require:[true,"You are required to enter the capacity of the resource"],
    },
    Location:{
        type:String,
        require:[true,"You are required to enter the location of the resource"],
    },
    AvailabilityHours:{
        StartsAt:{
            type:String,
            required:[true,"You are required to enter the start hour of the resource"]
        },
        closesAt:{
            type:String,
            required:[true,"You are required to enter the closing hour of the resource"]
        }

    },
    OwnerID:{
        type:String,
        require:[true,"You are required to enter the Id of the owner"]
    },
    Tags:{
        type:[String],
        required:[true,"You are required to enter the field Tags"]
    }

},{
    versionKey:false,
    timestamps:true,
    strict:"throw"
});
export const ResourceModel=model("Resource",ResourceSchema);