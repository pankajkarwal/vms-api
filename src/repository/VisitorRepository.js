import visitorModel from '../models/VisitorMaster'
import constants from '../utils/constants';

export { addVisitor, fetchAllVisitors, updateVisitor, getVisitor, deleteVisitor }

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
        await visitorModel.find({}, async (err, data) => {
            response.status = 200;
            response.data = data;
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
        await visitorModel.findById(id).exec(async (err, data) => {
            response.status = 200;
            response.data = data;
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
        await visitorModel.deleteOne({_id:id}).exec(async (err, data) => {
            response.status = 200;
            response.data = data;
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
       const {name} = req.body;
        const tblSchema = new visitorModel(req.body);
        const hasData = await visitorModel.findOne({ name: name }).exec();
        if (hasData != null) {
            return res.status(constants.STATUS_CODES.VISITOR_WITH_NAME_EXISTS).send({ error: constants.MESSAGES.VISITOR.NAME_EXISTS })
        }
        await tblSchema.save(function (err, data) {
            if (err) {
                sendError(err, constants.ERRORS.DEFAULT_ERROR);
            } else {
                response.data = data;
                response.status = 200;
                // response message 
                response.message = constants.MESSAGES.VISITOR.ADD;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        return err
    }

}

const updateVisitor = async (req, res) => {
    try {
        const payload = req.body.visitorDetails;
        await visitorModel.updateOne({_id: payload._id},{'$set': payload},function (err) {
            if (err) {
                sendError(err, constants.ERRORS.DEFAULT_ERROR);
            } else {
                response.data = payload._id;
                response.status = 200;
                // response message 
                response.message = constants.MESSAGES.VISITOR.UPDATE;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        return err
    }

}

