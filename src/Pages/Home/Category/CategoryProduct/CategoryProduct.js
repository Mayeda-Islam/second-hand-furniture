import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from './CategoryProductDetails/BookNowModal/BookNowModal';
import CategoryProductDetails from './CategoryProductDetails/CategoryProductDetails';

const CategoryProduct = () => {
    const categoryProduct=useLoaderData()
    return (
        <div className='h-[100vh] flex items-center justify-center '>
            <div className=' grid grid-cols-2'>
                {categoryProduct.map(product=><CategoryProductDetails product={product} key={product._id}></CategoryProductDetails>)}
            </div>
            
        </div>
    );
};

export default CategoryProduct;