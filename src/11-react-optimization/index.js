import React, { useState } from 'react';
import { useFetch } from '../8-custom-hook/2-useFetch';

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  console.log('Index Component is Running');
  return (
    <>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Counter
      </button>
      <BigList products={products} />
    </>
  );
};

const BigList = React.memo(({ products }) => {
  console.log('Big List is Running');
  return (
    <>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </>
  );
});

const SingleProduct = ({ fields }) => {
  console.log('Product List is Running');

  const { name, price } = fields;
  return (
    <article className='product'>
      <img src={fields.image[0].url} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};
export default Index;
