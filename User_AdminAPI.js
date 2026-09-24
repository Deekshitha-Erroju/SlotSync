import exp from "express"
import { register,login,view_resource,update_resource,delete_resource} from "./User_AdminController.js";
export const user_AdminRouter=exp.Router();
//register
user_AdminRouter.post("/register",register)

//login
user_AdminRouter.post("/login",login)

//view resources
user_AdminRouter.get("/view_resource/:id",view_resource)

//update resource
user_AdminRouter.put("/update_resource/:id",update_resource)

//delete resource
user_AdminRouter.delete("/delete_resource/:id",delete_resource)

//create booking
user_AdminRouter.post("/user/:name",(req,res)=>{
    
})

//view own booking
user_AdminRouter.get("/view_own_booking/:name",(req,res)=>{
    
})

//delete oun booking
user_AdminRouter.delete("/delete_own_booking/:name",(req,res)=>{
    
})