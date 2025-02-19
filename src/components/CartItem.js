import React, {useContext, useState} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()
    const iconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return(
        <div className = "cart-item">
            <i 
                className = {iconClass} 
                ref = {ref}
                onClick = {() => removeFromCart(item.id)}
            ></i>
            <img src={item.url} width="30%" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem