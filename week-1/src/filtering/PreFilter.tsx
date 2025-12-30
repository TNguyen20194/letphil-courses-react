import ProblemCard from "../components/ProblemCard";

/*
  {
  product: {
  id: 1,
  name: "Notebook",
  inStock: true
  }
  }
  */

  interface ProductProps {
    product :{
      id: number,
      name: string,
      inStock: boolean
    }
  }

  const ProductItem = ({product} : ProductProps) => {
    return (
      <li>
        No.{product.id}: {product.name}
      </li>
    )
  };

  // const productItem = (props) => {
  //   const product = props.product
  //   return (
  //     <li>
  //       No.{product.id}: {product.name}
  //     </li>
  //   )
  // }

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: true },
    { id: 2, name: "Pen", inStock: false },
    { id: 3, name: "Backpack", inStock: true },
  ];

  const inStockProducts = products.filter((product) => product.inStock === true);

  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
      <ul>
        {inStockProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </ProblemCard>
  );
};
