import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { EditDataProvider } from './context/EditContext.tsx';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EditDataProvider>
        <ToastContainer />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </EditDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
