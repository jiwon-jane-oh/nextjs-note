import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import clothesImage from '../../../public/images/clothes.jpg'
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';

// revalidate
// export const revalidate =3; //3s마다  렌뎌링-> ISR

// const products=['shirts', 'pants','skirts','shoes']
export default async function ProductsPage() {
  // throw new Error();

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
         <h2>Product Introduction Page</h2>   
         {/* priority - 가장중요한 이미지에 설정하면 next js에서  최우선으로 해당이미지를 다운로드 받아줌 */}
          <Image src={clothesImage} alt="Clothes" priority/>
            <ul>
              
              {products.map((product,idx)=><li key={idx}>
                <Link href={`products/${product.id}`}>{product.name}</Link>
              </li>)}
              
            </ul>
           <MeowArticle/>
        </>
    );
}

