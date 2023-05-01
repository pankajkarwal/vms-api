import UserModel from '../models/UserMaster'
import constants from '../utils/constants';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
import {generateTokenV2} from '../utils/Token'

export { addUser, fetchAllUser, updateUser, getUser, deleteUser, loginUser }

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

const fetchAllUser = async (req, res) => {
    try {
        await UserModel.find({}, async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        });
    }
    catch (err) {
        return err
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id
        await UserModel.findById(id).exec(async (err, data) => {
            response.status = 200;
            response.data = data;
            return res.status(response.status).json(response);
        })
    }
    catch (err) {
        return err
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, constants.SECURITY.HASH_ROUND_STRING_LENGTH);
        await UserModel.findOne({ email }).exec(async (err, user) => {
            let match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(400).json("Invalid Credentails")
            }
            const payload= {
                email: email,
                first_name:user.first_name,
                last_name:user.last_name,
                visitor:{
                    add:true,
                    delete: true,
                    edit:true,
                    update:true
                },
                country:{
                    add:true,
                    delete: true,
                    edit:true,
                    update:true
                },
                city:{
                    add:true,
                    delete: true,
                    edit:true,
                    update:true
                },
                state:{
                    add:true,
                    delete: true,
                    edit:true,
                    update:true
                }
            }
            const token = generateTokenV2(payload)
            const responseData ={
                token: token
            }
            response.status = 200;
            response.data = responseData;
            return res.status(response.status).json(response);
        })
    }
    catch (err) {
        return err
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await UserModel.deleteOne({ _id: id }).exec(async (err, data) => {
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

const addUser = async (req, res) => {
    // Our register logic starts here
    try {
        // Get user input
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send(constants.ERRORS.ALL_INPUTS_REQUIRED);
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await UserModel.findOne({ email });

        if (oldUser) {
            return res.status(409).send(constants.ERRORS.USER_EXISTS_LOGIN);
        }

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, constants.SECURITY.HASH_ROUND_STRING_LENGTH);

        // Create user in our database
        const user = await UserModel.create({
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: constants.SECURITY.TOKEN_EXPIRE_DURATION,
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here

}

const updateUser = async (req, res) => {
    try {
        const payload = req.body.userDetails;
        await UserModel.updateOne({ _id: payload._id }, { '$set': payload }, function (err) {
            if (err) {
                sendError(err, constants.ERRORS.DEFAULT_ERROR);
            } else {
                response.data = payload._id;
                response.status = 200;
                // response message 
                response.message = constants.MESSAGES.USER.UPDATE;
                return res.status(200).json(response);
            }
        });
    } catch (err) {
        console.log("---------------- Error ------------------------", err)
        return err
    }

}

