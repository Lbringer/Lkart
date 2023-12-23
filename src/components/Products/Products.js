import React from "react";
import "./Products.css";
import CardItem from "./CardItem/CardItem";

const items = [
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 340,
    price: 450,
    title: "Title of the item1",
    thumbnail: "placeholder.png",
  },
  {
    discountedPrice: 450,
    price: 600,
    title: "Title of the item2",
    thumbnail: "placeholder.png",
  },
];

const Products = () => {
  return (
    <div className="productList">
      {items.map((item, index) => {
        return <CardItem data={item} />;
      })}
    </div>
  );
};

export default Products;
