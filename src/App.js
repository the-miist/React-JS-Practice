import './App.css';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import Home from "./components/Home"
import ProductCard from './components/ProductCard';
import Register from './components/Register';

function App() {

  let name = "Divyesh";
  let surname = "Pithadiya";

  let details = {fName: name, lName:surname};
  let rollNo = 25;

  let products = [
    {image:"https://tse3.mm.bing.net/th?id=OIP.joIlkTfrrg3M86s4A-gPdgHaJ4&pid=Api&P=0&h=180",title:"US POLO TShirt", desc:"Great tshirt from US POLO"},
    {image:"https://tse1.mm.bing.net/th?id=OIP.mM_SGRNJsrE64cxPqh4xzwHaIF&pid=Api&P=0&h=180",title:"Adidas TShirt", desc:"Funky tshirt from adidas"},
    {image:"https://tse2.mm.bing.net/th?id=OIP.4gcFli2grxs0UFHWeOJ_KgHaJ4&pid=Api&P=0&h=180",title:"Reebok TShirt", desc:"Sport tshirt from Reebok"},
    {image:"https://tse1.mm.bing.net/th?id=OIP.--Bhv05grQ8eBnssITOZqgHaIt&pid=Api&P=0&h=180",title:"Puma Tshirt", desc:"Virat style tshirt from Puma"}
  ]
  
  
  return (
    <div className="App" style={{display:"flex", justifyContent:"center"}}>
      {/* <Home details={details} rollNo={rollNo}/>
      <Register name={name} /> */}
      {/* <Counter /> */}

      {
        products.map((product)=>{
          return <ProductCard details={product}/>
        })
      }
    </div>
  );
}

export default App;
