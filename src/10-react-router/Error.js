import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h1>Nothing Found</h1>
      <Link to='/'>Back to Home</Link>
    </>
  );
};

export default Error;
