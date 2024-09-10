import Link from 'next/link';
import React from 'react';

const products=['shirts', 'pants','skirts','shoes']
export default function ProductPage() {
    return (
        <>
         <h2>Product Detail Page</h2>   
            <ul>
              
              {products.map((product,idx)=><li key={idx}>
                <Link href={`products/${product}`}>{product}</Link>
              </li>)}
              
            </ul>
        </>
    );
}

