import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ image, name, price }) => {
  return (
    <article className='product'>
      <h4>{name}</h4>
      <p>{price}</p>
      <img src={image.url} alt='name' />
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: 'my default name',
  price: 15,
  image: {},
};

export default Product;
