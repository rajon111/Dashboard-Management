import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AllProducts = () => {

    const { data: toolsall, isLoading } = useQuery('toolsall', () => fetch('http://localhost:5000/tools').then(res => res.json()));

    if(isLoading){
        return <Loading/>
    }
    
    return (
        <div>
            
        </div>
    );
};

export default AllProducts;