import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartPhotos} = useContext(Context)
    const icon = cartPhotos.length > 1 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    return (
        <header>
            <Link to = "/">
                <h2>Pic Some</h2>
            </Link>
            <Link to = "/cart">
                {icon}
                {/* <i className="ri-shopping-cart-line ri-fw ri-2x"></i> */}
            </Link>
        </header>
    )
}

export default Header