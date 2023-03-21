import { addCountry, fetchAllCountries,updateCountry, getCountry, deleteCountry } from "../repository/CountryRepository";

class CountryController{
    saveCountry = async(req,res)=>{
        let country = await addCountry(req,res);
        return country;
    }

    fetchCountry = async(req,res)=>{
        let country = await fetchAllCountries(req,res);
        return country;
    }

    getCountry = async(req,res)=>{
        let country = await getCountry(req,res);
        return country;
    }

    deleteCountry = async(req,res)=>{
        let country = await deleteCountry(req,res);
        return country;
    }

    updateCountry = async(req,res)=>{
        let country = await updateCountry(req,res);
        return country;
    }
}
export default CountryController