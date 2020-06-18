import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Cart() {
    const {cartPhotos} = useContext(Context)
   
    return (
        <main className="cart-page">
            <h1>Check out</h1>
        </main>
    )
}

export default Cart