import { useState } from "react";
import './App.css'
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {

   const [isShowCart, setShowCart] = useState(false);

   const showCartHandler = ()=>{
      setShowCart(true)
   }
   const hideCartHandler = ()=>{
      setShowCart(false)
   }

return <CartProvider>
   {isShowCart && <Cart onHideCart={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}></Header> 
   <Meals/>

</CartProvider>
}

export default App
