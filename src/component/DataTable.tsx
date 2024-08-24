import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from "react-icons/md";
import { FormData } from '../Types/UserInfoType';

interface DataTableProps {
    data: FormData[];
    handleDelete: any;
    handleEdit: any;
}

const DataTable: React.FC<DataTableProps> = ({ data, handleDelete, handleEdit }) => {



    return (
        <div className=''>


            <table className=' w-full min-w-[800px]'>
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
                                <th className='text-center '>
                                    <button onClick={() => handleEdit(index)}>
                                        <FiEdit className='m-auto cursor-pointer' color='green' size={24} />
                                    </button>
                                </th>
                                <th className='text-center '>
                                    <button onClick={() => handleDelete(index)}>

                                        <MdDeleteOutline className='m-auto cursor-pointer' color='red' size={24} />
                                    </button>
                                </th>

                            </tr>
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default DataTable