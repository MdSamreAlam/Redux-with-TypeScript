import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductModel } from "../models/productModel";
//import "../containers/style.css";

interface Props {
    movie: ProductModel
}

export interface ProductModels {
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    price: string

}


const ProductComponent = () => {
    const productdetails = useSelector((state: any) => state.allProducts.products);
    const renderList = productdetails.map((product: any) => {
        const { id, title, image, price, category } = product;
        return (

            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            // <div className="cards" key={id}>
            //     <div className='image'>
            //         <img src={image} alt='movie'></img>
            //     </div>

            //     <div className="titles">
            //         <h1 className="titlemovie">
            //             {title}
            //         </h1>
            //         <p className="year">
            //             $ {price}
            //         </p>
            //     </div>
            // </div>
            // <div className="four wide column" key={id}>

            //     <div className="ui link cards">
            //         <div className="card">
            //             <div className="image">
            //                 <img src={image} alt={title} />
            //             </div>
            //             <div className="content">
            //                 <div >{title}</div>
            //                 <div className="meta price">$ {price}</div>
            //                 <div className="meta">{category}</div>
            //             </div>
            //         </div>
            //     </div>

            // </div>
        )
    });

    return (
        <>
            {renderList}
            {/*          
            <div >
                <img src={movie.image} />
            </div>
            <div className="main">
                <div className="header">{movie.title}</div>
                <div className="meta price">$ {movie.price}</div>
                <div className="meta">{movie.category}</div>
            </div> */}
            {/* {movie.map((prop) => {
                <div key={prop.id}>
                    <div>
                        <img src={prop.image} alt="image" />
                    </div>
                    <div>
                        <div className="content">
                            <div className="header">{prop.title}</div>
                            <div className="meta price">$ {prop.price}</div>
                            <div className="meta">{prop.category}</div>
                        </div>
                    </div>

                </div>
            })} */}

        </>
    )

    // // products = useSelector((state) => state.allProducts.products);
    // const products = useSelector((state: any) => state.allProducts.products);
    // const renderList = products.map((product: ProductModel) => {
    //     //const { id, title, image, price, category } = product;
    //     return (
    //         <div className="four wide column" key={product.id}>
    //             <Link to={`/product/${product.id}`}>
    //                 <div className="ui link cards">
    //                     <div className="card">
    //                         <div className="image">
    //                             <img src={product.image} alt={product.title} />
    //                         </div>
    //                         <div className="content">
    //                             <div className="header">{product.title}</div>
    //                             {/* <div className="meta price">$ {product.}</div> */}
    //                             <div className="meta">{product.category}</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </Link>
    //         </div>


};

export default ProductComponent;