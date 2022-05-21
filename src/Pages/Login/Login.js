import React, { useEffect,useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit , trigger} = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    // const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    useEffect(() => {
        const err = error || gError
        if (err) {
            switch (err?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;

                default:
                    toast("something went wrong")
            }
        }
    }, [error || gError])

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user || gUser, navigate, from])



    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }



    // if(error || gError){
    //     signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    // }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }

    // reset password part
  const resetPassword =() => {
    if (email) {
      sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('please enter your email address');
    }
  }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('email')
                                    setEmail(e.target.value)
                                }}
        
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Length Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to site ? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="w-100 text-center mt-2">
                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                    </div>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;