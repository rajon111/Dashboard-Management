import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blog/Blogs'
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard'
import MyProfile from './Pages/Dashboard/MyProfile'
import UserReview from './Pages/Dashboard/User/UserReview'
import MyOrders from './Pages/Dashboard/User/MyOrders'
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import EditProfile from './Pages/Dashboard/EditProfile';
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import ManageOrder from './Pages/Dashboard/Admin/ManageOrder';
import ManageProduct from './Pages/Dashboard/Admin/ManageProduct';
import UpDateProduct from './Pages/Dashboard/Admin/UpDateProduct';
import Users from './Pages/Dashboard/Admin/Users';
import AllProducts from './Pages/Home/AllProducts';
import Payment from './Pages/Dashboard/Payment';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';



function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blogs/>}></Route>
        <Route path='/products' element={<AllProducts/>}></Route>
        <Route path='/tools/:id' element={<RequireAuth><ProductDetails/></RequireAuth>}></Route>
        
        <Route path='/protfolio' element={<Portfolio/>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='review' element={<UserReview></UserReview>}></Route>
            <Route path='orders' element={<MyOrders></MyOrders>}></Route>
            <Route path='addproduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
            <Route path='manageorder' element={<RequireAdmin><ManageOrder/></RequireAdmin>}></Route>
            <Route path='manageproduct' element={<RequireAdmin><ManageProduct/></RequireAdmin>}></Route>
            <Route path='manageproduct/:id' element={<RequireAdmin><UpDateProduct/></RequireAdmin>}></Route>
            <Route path='payment/:id' element={<Payment/>}></Route>
            <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
            <Route path='edit' element={<EditProfile></EditProfile>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
