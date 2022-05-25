import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const { data: tools, loading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()));

    if(loading){
        return <Loading/>
    }
    console.log(tools)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                  tools?.map((tool,index) =><ProductCard tool={tool} key={index}></ProductCard>) 
                }
            </div>
        </div>
    );
};

export default Products;