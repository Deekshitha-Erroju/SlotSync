import exp from "express"
import {create_resource,view_resource,update_own_resource,delete_own_resource} from "./resourceController.js"
export const ResourcesRouter=exp.Router()

//create resource
ResourcesRouter.post("/create_resource",create_resource)
//view resources
ResourcesRouter.get("/view_resources/:id",view_resource)
//view own resource(resource owner)
ResourcesRouter.get("/view_own_resource/:id",update_own_resource)
//delete own resources
ResourcesRouter.delete("/delete_own_resource/:name",delete_own_resource)