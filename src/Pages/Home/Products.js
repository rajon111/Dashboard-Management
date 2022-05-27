import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://assignment-12-2b6d5.web.app/tools').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools?.map((tool, index) => <ProductCard tool={tool} key={index}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;