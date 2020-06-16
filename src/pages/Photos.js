import React, {useContext} from "react"
import {getClass} from "../utils/index"
import Image from "../components/Image"
import {Context} from "../Context"


function Photos() {
    const {allPhotos} = useContext(Context)
    const images = allPhotos.map((img,id) => (
        <Image key = {img.id} img = {img} className = {getClass(id)} />
    ))
    return (
            <main className="photos">
                {images}
            </main> 

    )
}

export default Photos