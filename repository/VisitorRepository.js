import visitorModel from '../models/VisitorMaster'
import constants from '../utils/constants';

const response = {
    status: 200,
    data: [],
    message: null
};

const sendError = (err, res) => {
    response.status = 501
    response.message = typeof err == 'object' ? err.message : err
    res.status(501).json(response)
};

const fetchAllVisitors = async (req, res) => {
    try{
        await visitorModel.find({}, async (err, visitor) => {
            response.status = 200;
            response.data = visitor;
            return res.status(response.status).json(response);
        });
    }
    catch(err){
        return err
    }
}

const getVisitor = async (req, res) => {
    try{
        const id= req.params.id
        await visitorModel.findById(id).exec(async (err, visitor) => {
            response.status = 200;
            response.data = visitor;
            return res.status(response.status).json(response);
        })
    }
    catch(err){
        return err
    }
}

const deleteVisitor = async (req, res) => {
    try{
        const id= req.params.id
        console.log("Params of delete",id)
        await visitorModel.deleteOne({_id:id}).exec(async (err, visitor) => {
            response.status = 200;
            response.data = visitor;
            return res.status(response.status).json(response);
        })
    }
    catch(err){
        response.status = 400;
        response.data = err;
        return res.status(response.status).json(response);
        
    }
}

const addVisitor = async (req, res) => {
    try {
       
        const newVisitor = new visitorModel(req.body);
        await newVisitor.save(function (err, visitor) {
            if (err) {
                sendError(err, constants.VISTOR.DEFAULT_ERROR);
            } else {
                response.data = visitor;
                response.status = 200;
                // response message 
                response.message = constants.VISTOR.ADD;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        return err
    }

}

const updateVisitor = async (req, res) => {
    try {
        const visitor = req.body.visitorDetails;
        await visitorModel.updateOne({_id: visitor._id},{'$set': visitor},function (err) {
            if (err) {
                sendError(err, constants.VISTOR.DEFAULT_ERROR);
            } else {
                response.data = visitor._id;
                response.status = 200;
                // response message 
                response.message = constants.VISTOR.UPDATE;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        return err
    }

}

export { addVisitor, fetchAllVisitors, updateVisitor, getVisitor, deleteVisitor }