import exp from "express"
import { connect } from "mongoose";
import { user_AdminRouter } from "./User_AdminAPI.js";
import { ResourcesRouter } from "./resourceAPI.js";
const app=exp();

app.use(exp.json());
async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/SlotSync");
        console.log("DB connection successful")
        app.listen(4000,()=>console.log("server running on port number 4000"))
    }catch(err){
        console.log("Error in Data Base connection",err)
    }
    
}

connectDB();
app.use("/resource-api",ResourcesRouter)
app.use("/user_Admin-api",user_AdminRouter)

