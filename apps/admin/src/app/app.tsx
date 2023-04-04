import { Banner } from '@react-monorepo/common-ui';
import { exampleProducts } from '@react-monorepo/products';

export function App() {
  return (
    <>
      <Banner text="Welcome to our admin app." />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
