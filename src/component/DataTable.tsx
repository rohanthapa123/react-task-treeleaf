import React, { useEffect } from 'react'
import { FormData } from '../Types/UserInfoType';

const DataTable: React.FC = () => {

    const stringData = localStorage.getItem("datas")
    const data = stringData ? JSON.parse(stringData) : [];

    return (
        <div className='p-8 w-[80%] m-auto rounded-lg bg-slate-500 mt-10 text-white'>
            <h1 className='text-4xl font-semibold text-center mb-4'>My Datas</h1>
            <table className='border-2 w-full'>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item: FormData, index: number) => {
                            return <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                                <th>{item.dob}</th>
                                <th>{item.country}</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default DataTable