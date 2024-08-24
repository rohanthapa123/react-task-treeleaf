import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from "react-icons/md";
import { FormData } from '../Types/UserInfoType';

interface DataTableProps {
    data: FormData[];
    handleDelete?: (id:string) => void;
    handleEdit?: (id:string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, handleDelete, handleEdit }) => {



    return (
        <div className=''>


            <table className=' w-full min-w-[800px]'>
                <thead>
                    <tr>
                        <th className='ps-4'>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Address</th>
                        {
                            handleEdit &&
                            <th>Edit</th>
                        }
                        {
                            handleDelete &&
                            <th>Delete</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item: FormData) => {
                            return <tr key={item.id}>
                                <th className='ps-4'>{item.name}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                                <th>{item.dob}</th>
                                <th>{item.country}</th>
                                {
                                    handleEdit ? <th className='text-center '>
                                        <button onClick={() => handleEdit(item.id)}>
                                            <FiEdit className='m-auto cursor-pointer' color='green' size={24} />
                                        </button>
                                    </th> : ""
                                }
                                {
                                    handleDelete ?
                                        <th className='text-center '>
                                            <button onClick={() => handleDelete(item.id)}>

                                                <MdDeleteOutline className='m-auto cursor-pointer' color='red' size={24} />
                                            </button>
                                        </th> : ""
                                }

                            </tr>
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default DataTable