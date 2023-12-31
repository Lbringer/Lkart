import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [eventInfo, setEventInfo] = useState({
    id: "",
    type: "",
  });
  const onAdd = (item) => {
    const items = [...cartItems];
    // console.log(item.quantity);
    const index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItems([...items]);
  };
  const onRemove = (item) => {
    const items = [...cartItems];
    // console.log(item.quantity);
    const index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItems([...items]);
  };

  const handleEventInfo = (id, type) => {
    setEventInfo({
      id,
      type,
    });
  };
  return (
    <>
      <Nav
        numCartItems={cartItems.length}
        cartItems={cartItems}
        handleEventInfo={handleEventInfo}
      />
      <Products onAdd={onAdd} onRemove={onRemove} eventInfo={eventInfo} />
    </>
  );
}

export default App;
