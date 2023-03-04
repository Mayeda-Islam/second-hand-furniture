import { useLoaderData } from "react-router-dom";
import Products from "../../../../Shared/Products/Products";

const CategoryProduct = () => {
  const categoryProduct = useLoaderData();

  return <Products products={categoryProduct}></Products>;
};

export default CategoryProduct;
