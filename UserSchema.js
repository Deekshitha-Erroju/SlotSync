import {model, Schema, version} from "mongoose"

const UserSchema= new Schema({
    name:{
        type:String,
        require:[true,"You are required to enter a name"],
        minLength:[3,"You are required to enter a name of minimum length 3"],
        maxLength:[20,"You are required to enter a name of length less than 20"],
        trim:true
    },
    email:{
        type:String,
        require:[true,"You are required to enter an email"],
        trim:true
    },
    password:{
        type:String,
        require:[true,"You are required to enter password"],
        minLength:[5,"You are required to enter a password of minimum length 5"],
        maxLength:[100,"You are required to enter a password of length less than 100"],
        trim:true
    },
    role: {
       type: String,
       enum: {
          values: ["user", "admin", "resource_owner"],
          message: "invalid role selected"
       },
       trim: true
    }
  },{
    versionKey:false,
    timestamps:true,
    strict:"throw"
});

export const UserModel=model("user",UserSchema);
