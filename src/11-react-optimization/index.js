import React from 'react';
import { useFetch } from '../8-custom-hook/2-useFetch';

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
  const { products } = useFetch(url);
  console.log(products);
  return (
    <>
      <BigList products={products} />
    </>
  );
};

const BigList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </>
  );
};

const SingleProduct = ({ fields }) => {
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
