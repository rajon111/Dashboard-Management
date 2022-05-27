import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllProductCard from './AllProductCard';

const AllProducts = () => {

    const { data: toolsall, isLoading } = useQuery('toolsall', () => fetch('https://ancient-bastion-87117.herokuapp.com/tools').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    toolsall?.map((tool, index) => <AllProductCard tool={tool} key={index}></AllProductCard>)
                }
            </div>

        </div>
    );
};

export default AllProducts;