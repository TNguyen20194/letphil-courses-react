import ProblemCard from "../components/ProblemCard";

interface ProductProps {
  product: {
    id: number,
    name: string,
    price: number
  }
};

const ProductItem = ({product} : ProductProps) => {
  return (
    <div>
      {product.name}, {product.price}
    </div>
  )
}

export const PriceGreaterThan20 = () => {
  const products = [
    { id: 1, name: "Sticker Pack", price: 5 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 3, name: "Mousepad", price: 22 },
  ];

  const filteredProduct = products.filter((product) => product.price > 20);

  return (
    <ProblemCard
      title="Filter 04 — Filter by value"
      method="filter"
      question="Render products with price > 20."
      dataPreview={products}
    >
      {/* {products
        .filter((product) => product.price >= 20)
        .map((element) => (
          <div>
            {element.name}, {element.price}
          </div>
        ))} */}

        {filteredProduct.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ProblemCard>
  );
};
