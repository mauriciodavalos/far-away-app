import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteAllItem() {
    const confirmed = window.confirm(
      'Are you sure, you want to delete all items?'
    );

    if (confirmed) {
      setItems([]);
    }
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToogleItem={handleToogleItem}
        handleDeleteAllItem={handleDeleteAllItem}
      />
      <Stats items={items} />
    </div>
  );
}
