import { NextRequest, NextResponse } from "next/server";

//middleware: 문지기
// 모든 요청에 대해서 이 함수를 실행해줘
export function middleware(request:NextRequest) {
    console.log('middleware executing... ')
    if(request.nextUrl.pathname.startsWith('/products/1004')){
            console.log('middleware - redirecting route')
        return NextResponse.redirect(new URL('/products',request.url))
    }
}
// 특정페이지에서만 필요한경우
export const config={
    matcher:['/products/:path*']
}