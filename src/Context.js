import React from "react"
import { tsPropertySignature } from "@babel/types";

const Context = React.createContext();

function ContextProvidor(props) {
    return(
        <Context.Provider value = "">
            {props.children}
        </Context.Provider>
    )
}

export default {ContextProvidor,Context}