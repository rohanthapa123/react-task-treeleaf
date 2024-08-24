import { useFormik } from 'formik';
import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { EditContext } from '../context/EditContext';
import { getCountries } from '../utils/api/fetch';
import { getAllData, getDataById } from '../utils/fetchFromLocal';


const inputSchema = yup.object({
    id: yup.string(),
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email must be valid").required("Email is required"),
    phone: yup.number().min(1000000, "Phone number must be minimum 7 digits").required("Phone Number is required"),
    dob: yup.date().nullable(),
    city: yup.string(),
    district: yup.string(),
    country: yup.string(),
    province: yup.number().min(0).max(7),
    image: yup.string()
});




const InputForm: React.FC = () => {

    const { id, setId } = useContext(EditContext)!;

    const { data: countries } = useQuery({
        queryKey: ["country"],
        queryFn: getCountries,
    });

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: '',
            phone: '',
            dob: '',
            city: '',
            district: '',
            country: 'Nepal',
            province: '',
            image: ''
        },
        validationSchema: inputSchema,
        onSubmit: async (values) => {
            
            const existingValue = getAllData();
            if (id) {
                const index = existingValue.findIndex((item) => item.id === id);
                if (index !== -1) {
                    existingValue[index] = { ...values };
                } else {
                    toast.error("Record not found for update");
                    return;
                }
                setId(undefined);
            } else {
                values.id = uuidv4();
                existingValue.push(values);
            }
            // console.log(values);
            localStorage.setItem("datas", JSON.stringify(existingValue));
            formik.resetForm();
            window.dispatchEvent(new Event("storage"))
            toast.success("Successfully Added");

        }
    });

    const getData = (id: string) => {

        const result = getDataById(id);
        const data = result[0];
        if (data) {
            formik.setValues({
                id: data.id || '',
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                dob: data.dob || '',
                city: data.city || '',
                district: data.district || '',
                country: data.country || 'Nepal',
                province: data.province || '',
                image: data.image || ''
            });
            // console.log("Data successfully fetched and set in form:", data);
        } else {
            // console.log("No data found for id:", id);
        }

    }

    useEffect(() => {
        if (id !== undefined) {

            getData(id);
        }
        // console.log(id);
    }, [id])

    return (
        <form className="p-8 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[60%] m-auto rounded-lg bg-slate-500 mt-4 text-white" onSubmit={formik.handleSubmit}>
            <div className="my-4">
                <label htmlFor="name" className="font-semibold text-gray-100 text-sm">
                    Full Name <span className='text-red-600'> *</span>
                </label>
                <input
                    className="w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-600">{formik.errors.name}</div>
                ) : null}
            </div>

            <div className="my-4">
                <label htmlFor="email-address-icon" className="font-semibold text-gray-100 text-sm">
                    Your Email <span className='text-red-600'> *</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                        >
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        id="email-address-icon"
                        className="bg-slate-600 border border-slate-800 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-400"
                        placeholder="yourname@email.com"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-600">{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="my-4">
                <label htmlFor="phone" className="font-semibold text-gray-100 text-sm">
                    Phone Number <span className='text-red-600'> *</span>
                </label>
                <input
                    className="w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-600">{formik.errors.phone}</div>
                ) : null}
            </div>

            <div className="my-4">
                <label htmlFor="dob" className="font-semibold text-gray-100 text-sm">
                    Date of Birth
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input
                        id="default-datepicker"
                        type="date"
                        className="bg-slate-600 border border-slate-800 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-400"
                        placeholder="Select date"
                        name="dob"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.dob && formik.errors.dob ? (
                        <div className="text-red-600">{formik.errors.dob}</div>
                    ) : null}
                </div>
            </div>

            <fieldset className='border border-slate-50 p-4 rounded-xl'>
                <legend className="font-semibold text-gray-100 text-lg">Address</legend>
                <div className="flex flex-col sm:flex-row sm:gap-10">
                    <div className="my-2 w-[100%] md:w-[50%]">
                        <label htmlFor="city" className="font-semibold text-gray-100 text-sm">
                            City
                        </label>
                        <input
                            className="w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none"
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Enter Your City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="text-red-600">{formik.errors.city}</div>
                        ) : null}
                    </div>
                    <div className="my-2 w-[100%] md:w-[50%]">
                        <label htmlFor="district" className="font-semibold text-gray-100 text-sm">
                            District
                        </label>
                        <input
                            className="w-full p-2 rounded-md bg-slate-600 border-slate-800 placeholder:text-slate-300 mt-1 focus:outline-none"
                            type="text"
                            name="district"
                            id="district"
                            placeholder="Enter Your District"
                            value={formik.values.district}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.district && formik.errors.district ? (
                            <div className="text-red-600">{formik.errors.district}</div>
                        ) : null}
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="province" className="font-semibold text-gray-100 text-sm">
                        Select Province
                    </label>
                    <select
                        id="province"
                        name="province"
                        className="bg-slate-600 border border-slate-800 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formik.values.province}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">Select Province</option>
                        <option value={1}>Province 1</option>
                        <option value={2}>Madesh Pradesh</option>
                        <option value={3}>Bagmati Province</option>
                        <option value={4}>Gandaki</option>
                        <option value={5}>Lumbini</option>
                        <option value={6}>Karnali</option>
                        <option value={7}>Sudurpaschim</option>
                    </select>
                    {formik.touched.province && formik.errors.province ? (
                        <div className="text-red-600">{formik.errors.province}</div>
                    ) : null}
                </div>
                <div className="my-4">
                    <label htmlFor="country" className="font-semibold text-gray-100 text-sm">
                        Select your country
                    </label>
                    <select
                        id="countries"
                        name="country"
                        className="bg-slate-600 border border-slate-800 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">Select Country</option>
                        {countries?.map((country) => (
                            <option key={country.cca3} value={country.name.common}>
                                {country.name.common}
                            </option>
                        ))}
                    </select>
                    {formik.touched.country && formik.errors.country ? (
                        <div className="text-red-600">{formik.errors.country}</div>
                    ) : null}
                </div>
            </fieldset>

            <div className="my-4">
                <label className="font-semibold text-gray-100 text-sm" htmlFor="image">
                    Upload Profile Picture
                </label>
                <input
                    className="block w-full text-sm text-gray-100 border border-slate-800 rounded-lg cursor-pointer bg-slate-600 focus:outline-none p-2"
                    aria-describedby="user_avatar_help"
                    id="image"
                    name="image"
                    type="file"
                    accept='image/png   '
                    onChange={(event) => {
                        formik.setFieldValue("image", event.currentTarget.files?.[0]);
                    }}
                />
                <div className="mt-1 text-sm text-gray-300" id="user_avatar_help">Only PNG allowed!</div>
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg mt-4"
            >
                {id ? "Update" : "Submit"}
            </button>
        </form>
    );
};

export default InputForm;
