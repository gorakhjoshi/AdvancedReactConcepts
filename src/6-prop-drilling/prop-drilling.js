import React, { useState } from 'react';
import { data } from '../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section>
        <h3>Prop Drilling</h3>
        <List people={people} />
      </section>
    </>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} />;
      })}
    </>
  );
};

const SinglePerson = (id) => {
  return (
    <div className='item'>
      <h2>Single Person</h2>
    </div>
  );
};

export default PropDrilling;
