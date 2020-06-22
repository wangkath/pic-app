import React from "react"
import Header from "./components/Header"
import {Switch, Route} from "react-router-dom"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Home from "./pages/Home"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
              <Route exact path = "/">
                <Home />
                <Photos />
              </Route>
              <Route path = "/cart">
                <Cart />
              </Route>
            </Switch>
        </div>
    )
}

export default App