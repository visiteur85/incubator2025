import type { ProductType } from "./Products.tsx";
import { ProductItem } from "./ProductItem.tsx";

type PropsType = {
  products: ProductType[];
};

export const ProductsList = ({ products }: PropsType) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
