import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [hovered,ref] = useHover()
    const {toggleFavorite, addToCart, cartPhotos,removeFromCart} = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i onClick = {() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if(hovered) {
            return <i onClick = {() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartIcon() {
        const image = cartPhotos.some(photo => (photo.id === img.id))
        if(image) {
            return <i onClick = {() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if(hovered) {
            return <i onClick = {() => addToCart(img)} className="ri-add-circle-line cart"></i> 
        }
    }

    return(
        <div 
            className = {`${className} image-container`}
            ref = {ref}
        >
            <img src = {img.url} className = "image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image