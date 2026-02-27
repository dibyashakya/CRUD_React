import SingleItem from "./SingleItem";

const Items = ({ items, editCompleted }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={items.id}
            item={item}
            editCompleted={editCompleted}
          ></SingleItem>
        );
      })}
    </div>
  );
};
export default Items;
