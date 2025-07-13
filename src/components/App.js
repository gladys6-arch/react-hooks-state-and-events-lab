import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";


function App() {
 const [isDarkMode, setIsDarkMode]= useState(false);
  

function handleToggle(){
  setIsDarkMode(prev=> !prev)
}

return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>Toggle {isDarkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
  
}


export default App;
