import type { ProductType } from "./Products.tsx";
import { useState } from "react";

type PropsType = {
  product: ProductType;
};
export const ProductItem = ({ product }: PropsType) => {
  const [inCart, setInCart] = useState(false);
  const { id, name, price, category } = product;
  const addToCart = () => {
    setInCart((prevState) => !prevState);
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{category}</div>
      <button onClick={addToCart}>
        {inCart ? "товар в корзине" : "ДОбавить в корзину"}
      </button>
    </div>
  );
};
