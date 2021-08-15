import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/defaultImage.png';

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>{name}</h4>
      <p>{price}</p>
      <img src={url || defaultImage} alt='name' />
    </article>
  );
};

// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// Product.defaultProps = {
//   name: 'my default name',
//   price: 15,
//   image: defaultImage,
// };

export default Product;
