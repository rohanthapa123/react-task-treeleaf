import axios from "axios";
import { CountryArray } from "../../Types/CountryType";

export const getCountries = async (): Promise<CountryArray> => {
    const response = await axios.get<CountryArray>("https://restcountries.com/v3.1/all");
    return response.data;
}