import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

function Image({img, className}) {
    const [hovered,setHovered] = useState(false)
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
            return <i onClick = {() => removeFromCart(img)} className="ri-shopping-cart-fill cart"></i>
        } else if(hovered) {
            return <i onClick = {() => addToCart(img)} className="ri-add-circle-line cart"></i> 
        }
    }
    // const cartIcon = hovered && <i onClick = {() => addToCart(img)} className="ri-add-circle-line cart"></i> 

    return(
        <div 
            className = {`${className} image-container`}
            onMouseEnter = {() => setHovered(true)} 
            onMouseLeave = {() => setHovered(false)} 
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