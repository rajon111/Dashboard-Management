import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
