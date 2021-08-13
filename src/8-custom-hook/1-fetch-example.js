import { useFetch } from './2-useFetch.js';

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading' : 'product'}</h2>
    </div>
  );
};

export default Example;
