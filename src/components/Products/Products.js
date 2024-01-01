import React from "react";
import CardListItem from "./CardListItem/CardListItem";
import "./Products.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Container from "react-bootstrap/esm/Container";
const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getItems() {
      try {
        const res = await axios.get(
          "https://l-kart-feba7-default-rtdb.firebaseio.com/items.json"
        );
        const data = res.data;
        const transformedData = data.map((item, index) => {
          return { ...item, id: index };
        });
        setItems(transformedData);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);
  return isLoaded ? (
    <Container className="list">
      {items.map((item) => {
        return <CardListItem item={item} key={item.id} />;
      })}
    </Container>
  ) : (
    <Loader />
  );
};

export default Products;
