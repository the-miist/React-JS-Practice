import { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Counter from './components/Counter';

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
      <input 
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

      <Counter />

    </>
  );
}

export default App;
