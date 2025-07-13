import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setselecteredCategory] = useState("All");
  const itemsToDisplay = selectedCategory === "All"
  ? items
  : items.filter(item => item.category === selectedCategory);


  function handleChange(event){
    setselecteredCategory(event.target.value)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleChange}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
