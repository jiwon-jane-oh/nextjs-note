import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const products = await getProducts(); // Await the async function
    return NextResponse.json({ products }); // Return the response
}