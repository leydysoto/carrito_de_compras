

import { ItemList } from "./components/itemList"
import { Navbar } from "./components/navbar"
import { ShoppingCard } from "./components/shoppingCard"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

export function App(){
  return(
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<ItemList/>}/>
        <Route path="/cart" element={<ShoppingCard />}/>
       
      </Routes>
     

    </Router>
    
    
    

  )
  
}