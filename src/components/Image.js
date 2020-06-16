import React, {useState} from "react"

function Image({img, className}) {
    const [hovered,setHovered] = useState(false)

    return(
        <div className = {`${className} image-container`}>
            <img onMouseEnter = {() => setHovered(true)} onMouseLeave = {() => setHovered(false)} src = {img.url} className = "image-grid"/>
        </div>
    )
}

export default Image