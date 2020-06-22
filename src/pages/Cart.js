import React, {useContext, useState} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartPhotos,clearCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const cost = cartPhotos.length * 5.99
    const display = cartPhotos.map(item => (
        <div>
            {/* <img src = {item.url}></img> */}
            <CartItem key = {item.id} item = {item}/>
        </div>
    ))
    
    function placeOrder() {
        setButtonText("Ordering...")
        const time = setTimeout(() => {
            clearCart()
            setButtonText("Place Order")
        },3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {display}
            <p className = "total-cost">Total: {cost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                {cartPhotos.length > 0 ? <button onClick = {placeOrder}>{buttonText}</button> : <p>You have no items in your cart.</p>}
            </div>
        </main>
    )
}

export default Cart