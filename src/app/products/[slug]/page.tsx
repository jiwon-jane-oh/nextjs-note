import { notFound } from "next/navigation";

type Props ={
    params:{
        slug:string
    }
}
export default function PantsPage({params}:Props) {

    if(params.slug==='nothing' ){
        notFound();
    }
    return (
        <div>
            {params.slug} detail page 
        </div>
    );
}


export function generateStaticParams(){
    const products =['pants','skirts'];
    return products.map(product=> ({
        slug:product
    }))
}