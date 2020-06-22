import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartPhotos} = useContext(Context)
    const display = cartPhotos.map(item => (
        <div>
            {/* <img src = {item.url}></img> */}
            <CartItem key = {item.id} item = {item}/>
        </div>
    ))
    const cost = cartPhotos.length * 5.99
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {display}
            <p className = "total-cost">Total: {cost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart