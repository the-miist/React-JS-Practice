import { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Counter from './components/Counter';
import FormValidation from './components/FormValidtaion';
import FormValUsingRef from './components/FormValUsingRef';
import SideEffects from './components/SideEffects';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Login from "./components/Login";
import Home from "./components/Home"
import ProductDetails from "./components/ProductDetails"

import logo from "./logo.svg";
import Navigation from './components/Navigation';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  let productDetails = [
    {id:1,image:"https://tse3.mm.bing.net/th?id=OIP.joIlkTfrrg3M86s4A-gPdgHaJ4&pid=Api&P=0&h=180",title:"US POLO TShirt", desc:"Great tshirt from US POLO"},
    {id:2,image:"https://tse1.mm.bing.net/th?id=OIP.mM_SGRNJsrE64cxPqh4xzwHaIF&pid=Api&P=0&h=180",title:"Adidas TShirt", desc:"Funky tshirt from adidas"},
    {id:3,image:"https://tse2.mm.bing.net/th?id=OIP.4gcFli2grxs0UFHWeOJ_KgHaJ4&pid=Api&P=0&h=180",title:"Reebok TShirt", desc:"Sport tshirt from Reebok"},
    {id:4,image:"https://tse1.mm.bing.net/th?id=OIP.--Bhv05grQ8eBnssITOZqgHaIt&pid=Api&P=0&h=180",title:"Puma Tshirt", desc:"Virat style tshirt from Puma"}
  ]
  
  const [products, setProducts] = useState(productDetails);

  function searchProduct(event) {
    let prods = productDetails.filter((product)=>{
      return product.title.toLowerCase().startsWith(event.target.value.toLowerCase());
    })
    setProducts(prods);
  }

  return (
    <>
      {/* <input 
        onChange={(event)=>{
          searchProduct(event);
        }}
      type="text" placeholder='Search' style={{marginLeft:"5px"}}/>

      <div className="App" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
      {
        products.map((product)=>{
          return <ProductCard key={product.id} details={product}/>
        })
      }
    </div>

      <Counter /> */}

      {/* <FormValidation /> */}
      {/* <FormValUsingRef /> */}

      {/* <SideEffects /> */}
      {/* <a className='App-header' href="https://google.com">google</a>
      <img src={logo} /> */}

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productdetails" element={<ProductDetails/>} />
          <Route path='/home/:name/:surname' element={<Home />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>

      {/* <ProductList /> */}

    </>
  );
}

export default App;
