import { FormData } from "../Types/UserInfoType";

export const getAllData = ():FormData[] => {

    const stringData = localStorage.getItem("datas")
    const data = stringData ? JSON.parse(stringData) : [];
    return data;
}

export const getDataById = (id:string) => {

    const data = getAllData();
    const result = data.filter((item: FormData) => {
        return item.id === id;
    })
    return result;
}