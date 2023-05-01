import { addUser, fetchAllUser,updateUser, getUser, deleteUser,loginUser } from "../repository/UserRepository";

class UserController{
    saveUser = async(req,res)=>{
        let user = await addUser(req,res);
        return user;
    }
    loginUser = async(req,res)=>{
        let user = await loginUser(req,res);
        return user;
    }

    fetchUser = async(req,res)=>{
        let user = await fetchAllUser(req,res);
        return user;
    }

    getUser = async(req,res)=>{
        let user = await getUser(req,res);
        return user;
    }

    deleteUser = async(req,res)=>{
        let user = await deleteUser(req,res);
        return user;
    }

    updateUser = async(req,res)=>{
        let user = await updateUser(req,res);
        return user;
    }
}
export default UserController