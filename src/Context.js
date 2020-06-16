import React, {useState, useEffect} from "react"

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
    return(
        <Context.Provider value = {{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvidor,Context}