import SingleItem from "./SingleItem";

const Items = ({ items, editCompleted, removeItem, setEditId }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={items.id}
            item={item}
            editCompleted={editCompleted}
            removeItem={removeItem}
            setEditId={setEditId}
          ></SingleItem>
        );
      })}
    </div>
  );
};
export default Items;
