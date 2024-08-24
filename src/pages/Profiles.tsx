import React, { useEffect, useState } from 'react'
import DataTable from '../component/DataTable'
import { FormData } from '../Types/UserInfoType';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { getAllData } from '../utils/fetchFromLocal';

const Profiles: React.FC = () => {

    const [data, setData] = useState<FormData[]>([]);
    
    useEffect(() => {
        const getData = () => {
            const data = getAllData();
            setData(data);
        }
        getData();
    }, [])

    return (
        <div className='bg-slate-800 w-[100%] min-h-[100dvh] m-auto'>
            <div className='w-[100%] md:w-[90%] m-auto px-4 sm:px-12 md:px-16 py-4 sm:py-8'>
                <div className='absolute flex items-center h-10 '>
                    <NavLink to={"/"}>
                        <IoMdArrowRoundBack size={32} color='white' />
                    </NavLink>
                </div>
                <h1 className='text-center font-semibold text-4xl text-white'>Profiles</h1>
                <hr className='my-4' />
                <div className=' w-full overflow-x-scroll rounded-md min-h-[370px]  bg-slate-500 mt-10 text-white'>
                    <DataTable data={data} />
                </div>
            </div>
        </div>
    )
}

export default Profiles