import React from 'react';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading'
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, isLoading, reset } = useForm();

    const imageStorageKey = '8c0a9913c88db4043222ef9e72b3c378';


    const onSubmit = async data => {
        // console.log('dayt', data)
        const image = data?.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${ imageStorageKey }`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    // console.log('imgbb', result)
                    const img = result.data.url;
                    const product = {
                        name: data?.name,
                        brand: data?.brand,
                        quantity: data?.quantity,
                        price: data?.price,
                        discription: data?.discription,
                        img: img
                    }
                    // send to your database 
                    fetch('https://ancient-bastion-87117.herokuapp.com/api/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('product', inserted)
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add Product');
                            }
                        })

                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your brand"
                        className="input input-bordered w-full max-w-xs"
                        {...register("brand", {
                            required: {
                                value: true,
                                message: 'brand is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.brand?.type === 'required' && <span className="label-text-alt text-red-500">{errors.brand.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Qunatity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your brand"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your brand"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Discription</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your brand"
                        className="input input-bordered w-full max-w-xs"
                        {...register("discription", {
                            required: {
                                value: true,
                                message: 'discription is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.discription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.discription.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>

    );
};

export default AddProduct;