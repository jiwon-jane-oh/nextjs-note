import Image from 'next/image'

import styles from './page.module.css'
import {notFound} from 'next/navigation'
import os from 'os' //노드 APIs
import { useState } from 'react'
import Counter from '@/components/Counter'



export default function Home() {
  console.log('hello-server')
  console.log(os.hostname)

  // const [name, setName]= useState(); //서버 컴포넌트는 상태관련된것 사용불가
  return (
      <>
      <h1>Homepage v4</h1>
      <Counter/>
      <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' width={400} height={400} alt='shop'/>
      </>

  )
}
