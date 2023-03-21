import { addCity, fetchAllCity,updateCity, getCity, deleteCity } from "../repository/CityRepository";

class CityController{
    saveCity = async(req,res)=>{
        let city = await addCity(req,res);
        return city;
    }

    fetchCity = async(req,res)=>{
        let city = await fetchAllCity(req,res);
        return city;
    }

    getCity = async(req,res)=>{
        let city = await getCity(req,res);
        return city;
    }

    deleteCity = async(req,res)=>{
        let city = await deleteCity(req,res);
        return city;
    }

    updateCity = async(req,res)=>{
        let city = await updateCity(req,res);
        return city;
    }
}
export default CityController