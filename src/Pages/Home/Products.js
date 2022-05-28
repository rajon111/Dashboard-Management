import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductCard from './ProductCard';
import Fade from 'react-reveal/Fade';

const Products = () => {
    
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://ancient-bastion-87117.herokuapp.com/tools').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
             <Fade left>
             <h3 className='text-primary  text-3xl text-center mt-5 mb-5 font-bold uppercase'>Our Products</h3>
             </Fade>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools?.map((tool, index) => <ProductCard tool={tool} key={index}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;