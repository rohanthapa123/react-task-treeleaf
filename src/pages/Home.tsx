

import { NavLink } from 'react-router-dom'
import InputForm from '../component/InputForm'
import ViewData from '../component/ViewData'

function Home() {


    return (
        <div className='bg-slate-800 w-[100%] min-h-[100dvh] m-auto'>
            <div className='w-[100%] md:w-[90%] m-auto px-4 sm:px-12 md:px-16 py-4 sm:py-8'>

                <h1 className='text-4xl text-center font-semibold text-slate-300'>Input Form</h1>
                <InputForm />
                <ViewData />
                <NavLink to={"/profiles"}>

                    <button className=' bg-blue-400 p-2 font-semibold rounded-lg my-4 relative left-[50%] translate-x-[-50%] w-fit'>
                        View All Details
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Home
