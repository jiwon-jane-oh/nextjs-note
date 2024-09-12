import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

import MeowArticle from '@/components/MeowArticle';

// revalidate
// export const revalidate =3; //3s마다  렌뎌링-> ISR

// const products=['shirts', 'pants','skirts','shoes']
export default async function ProductsPage() {

  // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서 보여줌
    const products = await getProducts();
  // // fetch ssg + revalidate
  // const res = await fetch('https://meowfacts.herokuapp.com', {
  //   // next:{revalidate:3},// 3초마다 ISR로 만들어줄게!
  //   next: { revalidate: 0 }, //SSR - 요청올때마다 렌더링
  //   // cache:'no-store' // SSR - 요청올때마다  렌더링
  // });
  // const data = await res.json();
  // const factText = data.data[0];


  return (
        <>
         <h2>Product Detail Page</h2>   
            <ul>
              
              {products.map((product,idx)=><li key={idx}>
                <Link href={`products/${product.id}`}>{product.name}</Link>
              </li>)}
              
            </ul>
           <MeowArticle/>
        </>
    );
}

