
import './App.css'
import DataTable from './component/DataTable'
import InputForm from './component/InputForm'
import ViewData from './component/ViewData'

function App() {

  return (
    <div className='bg-slate-800 w-[100%] min-h-[100dvh] m-auto'>
      <div className='w-[100%] md:w-[90%] m-auto px-4 sm:px-12 md:px-16 py-4 sm:py-8'>

        <h1 className='text-4xl text-center font-semibold text-slate-300'>Input Form</h1>
        <InputForm />
        <ViewData />
      </div>
    </div>
  )
}

export default App
