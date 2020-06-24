import React, {useState, useEffect} from "react"
import { all } from "q"

const Context = React.createContext()

function ContextProvidor(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartPhotos, setCartPhotos] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(data => data.json())
            .then(data => setAllPhotos(data))
        
    },[])

    function toggleFavorite(id) {
        setAllPhotos(allPhotos.map(photo => {
            if(photo.id === id) {
                photo.isFavorite = !photo.isFavorite
            }
            return photo
        }))
    }

    function addToCart(item) {
        setCartPhotos(prevItems => [...prevItems, item])
    }

    function removeFromCart(id) {
        setCartPhotos(prevItems => prevItems.filter(item => item.id != id))
    }

    function clearCart() {
        setCartPhotos([])
    }

    return(
        <Context.Provider value = {{allPhotos,toggleFavorite,addToCart,cartPhotos,removeFromCart, clearCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvidor,Context}