import bcrypt, { compare, hash } from "bcrypt"
import { UserModel } from "./UserSchema.js"
import { ResourceModel } from "./resource.js"

async function register(req,res) {
    try{
       let NewUser= req.body
       let HashPass=await hash(NewUser.password,12)
       NewUser.password=HashPass
       let UserDoc=await UserModel.create(NewUser)
       res.status(200).json({success:true,message:"user registered successfully",data:UserDoc})
    }catch(err) {
       res.status(500).json({success: false,message: "error in user registration",error: err.message});
   }   
}
async function login(req,res){
       let LogUser=req.body
       let user=await UserModel.findById({email:LogUser.email})
       if(user===null){
         res.status(401).json({success:false,message:"invalid email"})
       }else{
         let result=compare(LogUser.password, user.password)
         if(result===false){
            res.status(401).json({success:false,message:"invalid password"})
         }else{
            let signedToken=jwt.sign({id:user._id,role:user.role},'adcdef',{expiresIn:'1d'})
            res.status(200).json({success:true,message:"login successful",token:signedToken})
         }

   }
}
async function view_resource(req,res){
    try{
        let id=req.params.id
        let Vres=await ResourceModel.findById(id)
        if(Vres===null){
            res.status(404).json({success:false,message:"resource not found"})
        }else{
            res.status(200).json({success:true,message:"resource fetched successfully",data:Vres})
        }
    }catch(err){
       res.status(500).json({success: false,message: "error in fetching the user",error: err.message});
    }
}
async function update_resource(req,res) {
    try{
       let Res= await ResourceModel.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true })
       if(!Res){
         res.status(404).json({success:false,message:"resource not found"})
       }else{
       res.status(200).json({success:true,message:"resource updated successfully",data:Res})
       }
    }catch{
        res.status(500).json({success: false,message: "error in updating the user",error: err.message});
    }
}
async function delete_resource(req,res) {
     try{
       let Res= await ResourceModel.findByIdAndDelete(req.params.id)
       if(!Res){
         res.status(404).json({success:false,message:"resource not found"})
       }else{
       res.status(200).json({success:true,message:"resource deleted successfully",data:Res})
       }
    }catch{
        res.status(500).json({success: false,message: "error in deleting the user",error: err.message});
    }
}
export {register,login,view_resource,update_resource,delete_resource}        