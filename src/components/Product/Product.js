import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="Product Image" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="cart-btn" onClick={() => props.addCartHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;