import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    const itemPrice = cart.reduce((total, product) => total + product.price, 0);
    const items = parseFloat(itemPrice);
    // console.log(itemPrice);
    let shippingPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        shippingPrice = (shippingPrice + element.shipping);
        shippingPrice = parseFloat(shippingPrice);
    }
    const totalPrice = (items + shippingPrice);
    const tax = (totalPrice * 5) / 100;
    const totalOrderPrice = totalPrice + tax;
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Order : {cart.length}</h4>
            <br />
            <p>Items : $ {items}</p>
            <p>Shipping & Handling : $ {shippingPrice}</p>
            <p>Total : $ {totalPrice}</p>
            <p>Tax & VAT : $ {tax}</p>
            <h3>Order Total : $ {totalOrderPrice}</h3>
        </div>
    );
};

export default Cart;