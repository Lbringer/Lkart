import React from "react";
import CardListItem from "./CardListItem/CardListItem";
import "./Products.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Container from "react-bootstrap/esm/Container";
const Products = ({ onAdd, onRemove, eventInfo }) => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAdd = (id) => {
    const data = [...items];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItems([...data]);
    onAdd(data[index]);
  };

  const handleRemove = (id) => {
    const data = [...items];
    let index = data.findIndex((i) => i.id === id);
    if (data[index].quantity <= 0) {
      return;
    }
    data[index].quantity -= 1;
    setItems([...data]);
    onRemove(data[index]);
  };

  useEffect(() => {
    if (eventInfo.id > -1) {
      if (eventInfo.type === 1) {
        handleAdd(eventInfo.id);
      } else if (eventInfo.type === -1) {
        handleRemove(eventInfo.id);
      }
    }
  }, [eventInfo]);

  useEffect(() => {
    async function getItems() {
      try {
        const res = await axios.get(
          "https://l-kart-feba7-default-rtdb.firebaseio.com/items.json"
        );
        const data = res.data;
        const transformedData = data.map((item, index) => {
          return { ...item, id: index, quantity: 0 };
        });
        setItems(transformedData);
        setIsLoaded(true);
        console.log(transformedData);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);
  return isLoaded ? (
    <Container className="list">
      {items.map((item) => {
        return (
          <CardListItem
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            item={item}
            key={item.id}
          />
        );
      })}
    </Container>
  ) : (
    <Loader />
  );
};

export default Products;
