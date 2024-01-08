import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import AuthContextProvider from './context/AuthContextProvider';
import TodoInput from './components/TodoInput';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/todos' element={<TodoInput />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App
