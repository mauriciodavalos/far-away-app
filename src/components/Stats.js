export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em> Start adding items to the packing list </em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <>
      {percentage === 100 ? (
        <footer className="stats">You are done packing!!! 🚀</footer>
      ) : (
        <footer className="stats">
          You have {numItems} items on your list, and you already packed{' '}
          {numPacked} <em> ({percentage}%) </em>
        </footer>
      )}
    </>
  );
}
