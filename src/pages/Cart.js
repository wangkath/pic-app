import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Cart() {
    const {cartPhotos} = useContext(Context)
    const display = cartPhotos.map(item => (<img src = {item.url}></img>))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {display}
        </main>
    )
}

export default Cart