export default function Item({item, onDeleteItem, onPackedItem}){
 
    return(
      <>
        <input type="checkbox" value={item.packed} onChange={() => onPackedItem(item.id)}></input>
        <span style={item.packed ? {textDecoration: "line-through"} : null}>{item.quantity}<span style={{fontFamily : "Tajawal"}}> {item.description}</span></span>
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
      </>
      
    )
  }