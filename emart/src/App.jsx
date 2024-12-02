import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
function App() {
const [order,setOrder]=useState(null)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
      <Route path="/order-conformation" element={<Order order={order}/>}></Route>
      <Route path="/filter-data" element={<FilterData/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
