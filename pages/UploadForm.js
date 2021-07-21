import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {Grid} from '@material-ui/core';



function UploadForm(){
    const getProductsUrl = "http://localhost:8000/v1/products"
    const getCartActiveUrl = "http://localhost:8000/v1/carts/active"
    const [cartActive, setCartActive] = useState([]);


    const [products, setProduct] = useState([]);
    const router = useRouter()

    useEffect(async ()=>{
        const response = await fetch(getProductsUrl, {method: "GET"});
        const json = await response.json();
        setProduct(json)
        setCartActive(0)
    }, [])

    
    const handleAddToCart = async (product) =>{
        const cartResponse = await fetch(getCartActiveUrl, {method: "GET"});
        const cartJson = await cartResponse.json();
        
        product.cart_id = cartJson.id;

        const body = JSON.stringify(product)
        const header = { 'content-type': 'application/json'}
        const response = await fetch("http://localhost:8000/v1/cartitems", {method: "POST", body, headers: { 'content-type': 'application/json'}});
        router.push("/shop")
    }
    
    return(
        <Container>
            <input type="file" name="file" onChange={changeHandler} />
            <button onClick={handleSubmission}
                onAddToCart={handleAddToCart}
            >Submit</button>
        </Container>
    );
}
export default UploadForm;