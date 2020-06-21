import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartPhotos} = useContext(Context)
    const icon = cartPhotos.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    return (
        <header>
            <Link to = "/" className = "title">
                <h2>Pic Some</h2>
            </Link>
            <Link to = "/cart" className = "cartbox">
                <h2>Cart</h2>
                {icon}
            </Link>
        </header>
    )
}

export default Header