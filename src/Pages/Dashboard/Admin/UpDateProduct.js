import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const UpDateProduct = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()

    const { data: updateProduct, loading, refetch } = useQuery(['updateProduct', id], () => fetch(`https://assignment-12-2b6d5.web.app/tools/${ id }`).then(res => res.json()));
    //    console.log('hello',updateProduct)

    const handleUpdate = e => {
        e.preventDefault()
        const updatedata = {
            name: e.target.name.value,
            model: e.target.model.value,
            price: e.target.price.value,
            discription: e.target.discription.value,
        }
        fetch(`https://assignment-12-2b6d5.web.app/api/products/${ id }`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            },
            body: JSON.stringify(updatedata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
                toast.success('Successfully updated')
            });


    }

    return (
        <div>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className="hero min-h-fit bg-base-200">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">name</span>
                                    </label>
                                    <input type="text" placeholder={updateProduct?.name} name='name' className="input input-bordered" />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">brand</span>
                                    </label>
                                    <input type="text" placeholder={updateProduct?.brand} name='brand' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Model</span>
                                    </label>
                                    <input type="text" placeholder="model" name='model' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price" name='price' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Discription</span>
                                    </label>
                                    <input type="text" placeholder="discription" name='discription' className="input input-bordered" />
                                </div>

                                <input type="submit" className='btn' value="Update" />

                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpDateProduct;