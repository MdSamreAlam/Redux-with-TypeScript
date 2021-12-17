import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { SetProducts, fetchProducts } from "../redux/action/productAction";


const ProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => (state));
    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios
    //             .get("https://fakestoreapi.com/products")
    //         dispatch(SetProducts(response.data));
    //     }
    //     catch {
    //         console.log("Error", Error);
    //     }

    //     //console.log(response.data);
    // };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log("Products :", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>


    );
};

export default ProductPage;