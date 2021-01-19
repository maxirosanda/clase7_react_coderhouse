import React, {useState, useEffect } from "react"; 
import './App.css';

function App() {
  const [productos, setProductos] = useState()   
 useEffect(() => {     
  
  fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA5725")
   .then(response => response.json())
   .then(data => setProductos(data.results
  .slice(0, 10)
  ));
   
  }, []);  
      console.log(productos)   
      return (    
         <div>{
          productos?.map((producto) => {       
            return (<img src={producto.thumbnail} alt="producto ML" style={{height: '100px'}}/>
            ) 
                })}    
             </div>  
              );
 
}

export default App;
