import countryModel from '../models/CountryMaster'
import constants from '../utils/constants';

export { addCountry, fetchAllCountries, updateCountry, getCountry, deleteCountry }

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

const fetchAllCountries = async (req, res) => {
    try {
        await countryModel.find({}, async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        });
    }
    catch (err) {
        return err
    }
}

const getCountry = async (req, res) => {
    try {
        const id = req.params.id
        await countryModel.findById(id).exec(async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        })
    }
    catch (err) {
        return err
    }
}

const deleteCountry = async (req, res) => {
    try {
        const id = req.params.id
        await countryModel.deleteOne({ _id: id }).exec(async (err, data) => {
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

const addCountry = async (req, res) => {
    try {
        const { name } = req.body;
        const tblSchema = new countryModel(req.body);
        const hasData = await countryModel.findOne({ name: name }).exec();
        if (hasData != null) {
            return res.status(constants.STATUS_CODES.COUNTRY_WITH_NAME_EXISTS).send({ error: constants.MESSAGES.COUNTRY.NAME_EXISTS })
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
                response.message = constants.MESSAGES.COUNTRY.ADD;
                return res.status(200).json(response);
            }
        });


    } catch (err) {
        return res.json(err)
    }

}

const updateCountry = async (req, res) => {
    try {
        const payload = req.body.countryDetails;
        const hasData = await countryModel.findOne({ name: payload.name }).exec();
        if (hasData != null) {
            return res.status(constants.STATUS_CODES.COUNTRY_WITH_NAME_EXISTS).send({ error: constants.MESSAGES.COUNTRY.NAME_EXISTS })
        }
        await countryModel.updateOne({ _id: payload._id }, { '$set': payload }, function (err) {
            if (err) {
                sendError(err, constants.ERRORS.DEFAULT_ERROR);
            } else {
                response.data = payload._id;
                response.status = 200;
                // response message 
                response.message = constants.MESSAGES.COUNTRY.UPDATE;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        return err
    }

}

