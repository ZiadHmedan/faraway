import React from "react";

export default function Stats({items}) {
    const itemCount = items.length;
    const packedItemCount  = items.filter(item => item.packed).length
    const percentage = +Math.round(packedItemCount /  itemCount * 100) ;
    if(!itemCount){
        return(
            <p className="stats"><em>Start adding some items to your packing list 🚀</em></p>
        )
    }   
  return (
    <p className="stats">
      <em>
        {percentage === 100 ?"You got everything! Ready to go ✈️" : ` 💼 You have ${itemCount} items on your list, and you already packed ${packedItemCount} (${percentage}%)` }
      </em>
    </p>
  );
}
