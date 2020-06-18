import React, {useState, useEffect} from "react"
import { all } from "q"

const Context = React.createContext()

function ContextProvidor(props) {
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(data => data.json())
            .then(data => setAllPhotos(data))
            // .then(res => res.json())
            // .then(data => setAllPhotos(data))
        
    },[])

    function toggleFavorite(id) {
        setAllPhotos(allPhotos.map(photo => {
            if(photo.id === id) {
                photo.isFavorited = !photo.isFavorited
            }
            return photo
        }))
    }

    return(
        <Context.Provider value = {{allPhotos,toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvidor,Context}