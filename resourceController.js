import { ResourceModel } from "./resource.js" 

//create resource
async function create_resource(req,res){
    try{
        const resource= await ResourceModel.create(req.body)
        res.status(201).json({success:true,message:"resource created successfully"})
    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
}

//view resource
async function view_resource(req,res){
    try{
        const resource= await ResourceModel.findById(req.params.id)
        if(!resource){
            res.status(404).json({success:false,message:"resource dose not exist"})
        }else{
            res.status(201).json({success:true,message:"resource fetched successfully",resource:resource})
        }
    }catch(err){
            res.status(500).json({success:false,message:err.message})
    }
}

//update own resource
async function update_own_resource(req,res) {
    try{
        let resource= await ResourceModel.findById(req.params.id)
        if(!resource){
            res.status(404).json({success:false,message:"resource dose not exist"})
        }else{
            Object.assign(resource,req.body)
            await resource.save()
            res.status(200).json({success:true,message:"resource updated successfully",resource:resource})
        }
    }catch(err){
            res.status(500).json({success:false,message:err.message})
    }
    
}

//delete own resource
async function delete_own_resource(req,res) {
    try{
        let resource= await ResourceModel.findByIdAndDelete(req.params.id)
        if(!resource){
            res.status(404).json({success:false,message:"resource dose not exist"})
        }else{
            res.status(200).json({success:true,message:"resource deleted successfully",resource:resource})
        } 
    }catch(err){
            res.status(500).json({success:false,message:err.message}) 
    }
}

export {create_resource,view_resource,update_own_resource,delete_own_resource}