
import './App.css'
import InputForm from './component/InputForm'

function App() {

  return (
    <div className='bg-slate-800 w-[100%] min-h-[100dvh] m-auto'>
      <div className='container m-auto px-16 py-8'>

        <h1 className='text-4xl text-center font-semibold text-slate-300'>Input Form</h1>
        <InputForm />
      </div>
    </div>
  )
}

export default App
