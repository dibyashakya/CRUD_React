import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems.js";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState;
  const editCompleted = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filer((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("Deleted");
  };

  return (
    <section className="section-center">
      <ToastContainer position="center"></ToastContainer>
      <Items
        items={groceryItems}
        editCompleted={editCompleted}
        removeItem={removeItem}
      ></Items>
    </section>
  );
};
export default App;
