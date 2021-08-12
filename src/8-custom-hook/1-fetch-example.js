import { useState, useEffect } from 'react';

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Example = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    setProduct(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>{loading ? 'loading' : 'product'}</h2>
    </div>
  );
};

export default Example;
