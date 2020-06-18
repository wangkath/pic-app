import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({img, className}) {
    const [hovered,setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const heartIcon = hovered && <i onClick = {() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i> 

    return(
        <div 
            className = {`${className} image-container`}
            onMouseEnter = {() => setHovered(true)} 
            onMouseLeave = {() => setHovered(false)} 
        >
            <img src = {img.url} className = "image-grid"/>
            {heartIcon}
            {cartIcon}
            {img.isFavorite ? <h1>true</h1> : <h1>false</h1>}
        </div>
    )
}

export default Image