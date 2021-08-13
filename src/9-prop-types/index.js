import { useFetch } from '../8-custom-hook/2-useFetch';
import Product from './Product';
const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
  const { products } = useFetch(url);
  console.log(products);

  return (
    <>
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </>
  );
};

export default Index;
