import { useState } from 'react';
import { Item } from './Item';

export function PackingList({
  items,
  handleDeleteItem,
  handleToogleItem,
  handleDeleteAllItem,
}) {
  const [sortBy, setSortBy] = useState('input');
  const itemsObj = items;

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = itemsObj;
  }

  if (sortBy === 'description') {
    sortedItems = itemsObj
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItems = itemsObj
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((x) => (
          <Item
            item={x}
            handleDeleteItem={handleDeleteItem}
            handleToogleItem={handleToogleItem}
            key={x.id}
          />
        ))}
      </ul>

      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={() => handleDeleteAllItem()}>Clear List</button>
      </div>
    </div>
  );
}
