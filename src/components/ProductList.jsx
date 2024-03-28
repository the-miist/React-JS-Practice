import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Loader from "./Loader";

export default function ProductList() {

    const[products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
    }, [])

    async function getProducts() {
        try {
            let response = await axios.get("https://fakestoreapi.com/products/");
            setProducts(response.data);
        } catch(error) {
            alert("Something went wrong!");
        }
    }

    return(
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {

                products.length>0 ?  products.map((product)=>{
                    return <Product details={product} key={product.id}/>
                }) : <Loader />
            }
        </div>
    )

}