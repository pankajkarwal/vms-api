import { addVisitor, fetchAllVisitors,updateVisitor, getVisitor, deleteVisitor } from "../repository/VisitorRepository";

class VisitorController{
    saveVisitor = async(req,res)=>{
        let visitor = await addVisitor(req,res);
        return visitor;
    }

    fetchVisitor = async(req,res)=>{
        let visitors = await fetchAllVisitors(req,res);
        return visitors;
    }

    getVisitor = async(req,res)=>{
        let visitor = await getVisitor(req,res);
        return visitor;
    }

    deleteVisitor = async(req,res)=>{
        let visitor = await deleteVisitor(req,res);
        return visitor;
    }

    updateVisitor = async(req,res)=>{
        let visitors = await updateVisitor(req,res);
        return visitors;
    }
}
export default VisitorController