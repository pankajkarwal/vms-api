import CityModel from '../models/CityMaster'
import constants from '../utils/constants';

export { addCity, fetchAllCity, updateCity, getCity, deleteCity }

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

const fetchAllCity = async (req, res) => {
    try {
        await CityModel.find({}, async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        });
    }
    catch (err) {
        return err
    }
}

const getCity = async (req, res) => {
    try {
        const id = req.params.id
        await CityModel.findById(id).exec(async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        })
    }
    catch (err) {
        return err
    }
}

const deleteCity = async (req, res) => {
    try {
        const id = req.params.id
        await CityModel.deleteOne({ _id: id }).exec(async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        })
    }
    catch (err) {
        response.status = 400;
        response.data = err;
        return res.status(response.status).json(response);

    }
}

const addCity = async (req, res) => {
    try {
        const { name } = req.body;
        const tblSchema = new CityModel(req.body);
        const hasData = await CityModel.findOne({ name: name }).exec();
        if (hasData != null) {
            return res.status(constants.STATUS_CODES.CITY_WITH_NAME_EXISTS).send({ error: constants.MESSAGES.CITY.NAME_EXISTS })
        }
       
        await tblSchema.save(function (err, data) {
            if (err) {
                response.error = err;
                response.status = 400;
                return res.json(res);
            } else {
                response.data = data;
                response.status = 200;
                // response message 
                response.message = constants.MESSAGES.CITY.ADD;
                return res.status(200).json(response);
            }
        });


    } catch (err) {
        return res.json(err)
    }

}

const updateCity = async (req, res) => {
    try {
        const payload = req.body.cityDetails;
        console.log("----------- Data is ---------------",payload)
        await CityModel.updateOne({ _id: payload._id }, { '$set': payload }, function (err) {
            if (err) {
                res.status(constants.STATUS_CODES.CITY_WITH_NAME_EXISTS).send({ error: constants.MESSAGES.CITY.NAME_EXISTS })
                // sendError(constants.STATUS_CODES.CITY_WITH_NAME_EXISTS, res);
            } else {
                response.data = payload._id;
                response.status = 200;
                // response message 
                response.message = constants.MESSAGES.CITY.UPDATE;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        console.log("---------------- Error ------------------------",err)
        return err
    }

}

