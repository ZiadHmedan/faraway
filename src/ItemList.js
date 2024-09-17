import { useState } from "react";
import Item from "./Items";
export default function ItemsList({ items, onDeleteItem, onDeleteAll, onPackedItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "desc") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>
            <Item
              item={item}
              onPackedItem={onPackedItem}
              onDeleteItem={onDeleteItem}
            />
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="desc">SORT BY DESCRIPTION</option>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="packed">SORT BY PACKED</option>
        </select>
        <button onClick={onDeleteAll}>CLEAR LIST</button>
      </div>
    </div>
  );
}
