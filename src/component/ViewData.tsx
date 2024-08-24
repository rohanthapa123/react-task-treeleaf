import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FormData } from '../Types/UserInfoType';
import DataTable from './DataTable';
import Pagination from './Pagination';

const ViewData: React.FC = () => {

    const [data, setData] = React.useState<FormData[]>([]);
    const [total, setTotal] = useState<number>(0);

    const [paginationStart, setPaginationStart] = useState(0);
    const [perpage, setPerPage] = useState<number>(5);

    //for deleting the item using filter method
    const handleDelete = (id: number) => {

        //get data form localstorage
        const stringData = localStorage.getItem("datas")
        const data = stringData ? JSON.parse(stringData) : [];

        //filter and remove one to delete on new array
        const newData = data.filter((item: FormData, index: number) => {
            return index != id;
        })
        console.log(newData)

        //set new to localstorate
        localStorage.setItem("datas", JSON.stringify(newData));

        const newTotal = newData.length;
        const newStart = Math.min(paginationStart, Math.max(0, newTotal - perpage));

        //set pagination start to new on deletition if the last element of next page is deleted
        setPaginationStart(newStart);
        setTotal(newTotal);

        //trigger storage event to rerender with new data
        window.dispatchEvent(new Event("storage"))
        toast.success("Item deleted successfully")
    }

    //to fetch data i.e. from localstorage and set it based on pagination i.e. mimicking the data 
    //from api coming only required number
    const getData = () => {

        const stringData = localStorage.getItem("datas")
        const data = stringData ? JSON.parse(stringData) : [];
        setTotal(data.length);
        const dataToDisplay = data.filter((item: FormData, index: number) => {
            return index >= paginationStart && index < paginationStart + perpage;
        })
        setData(dataToDisplay);
        return data;
        console.log("hello")
    }

    useEffect(() => {
        //on component mount
        getData();

        //on event 
        window.addEventListener('storage', getData)

        //on component unmount
        return () => window.removeEventListener('storage', getData);

    }, [paginationStart])


    if (data?.length === 0) {
        return ""
    }

    return (
        <div className='p-8 w-[100%] lg:w-[90%] m-auto rounded-lg bg-slate-500 mt-10 text-white'>
            <h1 className='text-4xl font-semibold text-center mb-4'>My Datas</h1>
            <div className=' w-full overflow-x-scroll rounded-md min-h-[370px]'>
                <DataTable data={data} handleDelete={handleDelete} handleEdit={handleDelete} />
            </div>

            {
                total > 5 ? <Pagination total={total} perpage={perpage} start={paginationStart} setPaginationStart={setPaginationStart} /> : <></>
            }
        </div>
    )
}

export default ViewData