import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

// const products=['shirts', 'pants','skirts','shoes']
export default async function ProductPage() {

  // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서 보여줌
    const products = await getProducts();
  return (
        <>
         <h2>Product Detail Page</h2>   
            <ul>
              
              {products.map((product,idx)=><li key={idx}>
                <Link href={`products/${product.id}`}>{product.name}</Link>
              </li>)}
              
            </ul>
        </>
    );
}

