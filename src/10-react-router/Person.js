import React, { useEffect, useState } from 'react';
import { data } from '../data';
import { useParams, Link } from 'react-router-dom';

const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, [setName, id]);
  return (
    <>
      <h1>{name}</h1>;
      <Link to='/people' className='btn'>
        Back to people
      </Link>
    </>
  );
};

export default Person;
