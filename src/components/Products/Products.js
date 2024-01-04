import React from "react";
import CardListItem from "./CardListItem/CardListItem";
import "./Products.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Container from "react-bootstrap/esm/Container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search).get("item");

  const handleNotFound = () => {
    navigate("/404");
  };

  useEffect(() => {
    async function getItems() {
      let slug = `items.json`;
      if (params.category) {
        slug = `items-${params.category}.json`;
      }
      if (queryParams) {
        slug += `?search=${queryParams}`;
      }
      try {
        const res = await axios.get(
          `https://l-kart-feba7-default-rtdb.firebaseio.com/${slug}`
        );
        const data = res.data;

        if (!data) {
          handleNotFound();
          return;
        }
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

    return () => {
      setItems([]);
      setIsLoaded(false);
    };
    // eslint-disable-next-line
  }, [params.category, queryParams]);
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
