import React from 'react'

const InputForm: React.FC = () => {
    return (
        <form className=' p-8 w-[60%] m-auto rounded-lg bg-slate-500 mt-4 text-white'>
            <div className=' my-4'>
                <label htmlFor="name" className='font-semibold text-gray-100'>Full Name</label>
                <input className='w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none' type="text" name="name" id="name" placeholder='Enter Your Name' />
            </div>
            <div className=' my-4'>
                <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                </div>
            </div>
            <div className=' my-4'>
                <label htmlFor="phone" className='font-semibold text-gray-100'>Phone Number</label>
                <input className='w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none' type="text" name="phone" id="phone" placeholder='Enter Your Phone Number' />
            </div>
            <div className=' my-4'>
                <label htmlFor="dob" className='font-semibold text-gray-100'>Date of Birth</label>
                <input className='w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none' type="text" name="dob" id="dob" placeholder='Enter Your DOB' />
            </div>
            <div className=' my-4'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </select>
            </div>
            <div className=' my-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Only PNG allowed !</div>

            </div>
        </form>
    )
}

export default InputForm