import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      quantity,
      description: desc,
      packed: false,
    };
    if(desc !== ""){

      onAddItem(newItem);
    }

    setQuantity(1);
    setDesc("");
  };
  const handleQuantityChange = e => {
    setQuantity(+e.target.value);
  };
  const handleDescChange = e => {
    setDesc(e.target.value);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        what do you need for your
        <span style={{ fontFamily: "Tajawal" }}>نــزهة</span>
      </h3>
      <select value={quantity} onChange={handleQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        placeholder="item..."
        onChange={handleDescChange}
        value={desc}
      ></input>
      <button  >ADD</button>
    </form>
  );
}
