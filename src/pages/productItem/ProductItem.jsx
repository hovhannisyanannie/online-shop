import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCart } from '../../redux/action';
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading"
import "./productitem.css"

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);

            const response = await fetch (`http://localhost:3000/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }

        getProduct();

    }, [id]);

    const ShowProduct = () => {
      
        return (
            <>
                <div className="box">
                    <div className="back">
                        <button
                        onClick={() => navigate(-1)}>
                        Back
                        </button>
                    </div>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="box">
                    <h2>{product.title}</h2>
                    <h3>{product.category}</h3>
                    <h4>{product.brand}</h4>
                    <p>{product.description}</p>
                    <h1>$ {product.price}</h1>
                    <button className='button' onClick={() => addProduct(product)}><i class="fa-solid fa-bag-shopping"></i> Add to Cart </button>
                </div>
            </>
        )
    }

  return (
    <div class='product'>
        <div className="container">
        <div className="inner">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
        </div>
    </div>
  )
}

export default Product
