import { useState } from "react";
import "./index.css";
import Form from "./Form";
import ItemsList from "./ItemList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem =(newItem)=>{
    setItems(items => [newItem, ...items])
  }
  const handleDeleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };
  const handleDeleteAllItems = id => {
    const confirm = window.confirm("Are you sure you want to delete all item")
    if(confirm)setItems([]);
  };
  const handlePackedItem = id => {
    setItems(items => items.map(item => item.id === id ? {...item, packed : !item.packed}: item)
    )
  };
  return (
    <div className="app">
      <h1 >🌴 day <span style={{fontFamily : "Tajawal"}}>نــزهة</span>  💼</h1>
      <Form   onAddItem= {handleAddItem}/>
      <ItemsList items={items} onDeleteAll = {handleDeleteAllItems} onPackedItem = {handlePackedItem} onDeleteItem ={handleDeleteItem} />
      <Stats items = {items}/>
    </div>
  );
}
