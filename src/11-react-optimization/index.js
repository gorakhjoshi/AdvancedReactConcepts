import React, { useState, useCallback } from 'react';
import { useFetch } from '../8-custom-hook/2-useFetch';

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  console.log('Index Component is Running');

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Counter
      </button>
      <h1 style={{ marginTop: '3rem' }}>Cart: {cart}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  console.log('Big List is Running');
  return (
    <>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  console.log('Product List is Running');

  const { name, price } = fields;
  return (
    <article className='product'>
      <img src={fields.image[0].url} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );
};
export default Index;
