import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Blogs from './Pages/Blog/Blogs'
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard'
import MyProfile from './Pages/Dashboard/MyProfile'
import UserReview from './Pages/Dashboard/User/UserReview'
import MyOrders from './Pages/Dashboard/User/MyOrders'
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import EditProfile from './Pages/Dashboard/EditProfile';



function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blogs/>}></Route>
        <Route path='/tools/:id' element={<ProductDetails/>}></Route>
        
        <Route path='/protfolio' element={<Portfolio/>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='review' element={<UserReview></UserReview>}></Route>
            <Route path='orders' element={<MyOrders></MyOrders>}></Route>
            <Route path='edit' element={<EditProfile></EditProfile>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
