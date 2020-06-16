import React, {useState} from "react"
import { tsPropertySignature } from "@babel/types";

const Context = React.createContext();

function ContextProvidor(props) {
    const [photoArray,setPhotoArray] = useState([])
    return(
        <Context.Provider value = {photoArray}>
            {props.children}
        </Context.Provider>
    )
}

export default {ContextProvidor,Context}