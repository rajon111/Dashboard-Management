import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin'


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    console.log(admin)

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/edit">Edit Profile</Link></li>
                    {
                       admin? <>
                       <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                       <li><Link to="/dashboard/manageorder">Manage Order</Link></li>
                       <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                       <li><Link to="/dashboard/users">Users</Link></li> </> 
                       : 
                       <>
                        <li><Link to="/dashboard/review">Add Reviews</Link></li>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>
                       </> 
                    }
                    
                    
                    {/* { admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

