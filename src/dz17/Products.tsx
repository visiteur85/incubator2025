import { ProductsList } from "./ProductsList.tsx";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export const Products = () => {
  const products = [
    { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
    { id: 2, name: "Молоко", price: 60, category: "Молочные" },
    { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
  ];
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};
