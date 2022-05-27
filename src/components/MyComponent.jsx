import React from 'react';

const MyComponent = ({ person, message }) => {
  // console.log(person);
  return (
    <>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>Propiedad por defecto: {message}</div>
    </>
  );
};

// Propiedades por defecto
MyComponent.defaultProps = {
  message: 'Hola soy un mensaje',
};

export default MyComponent;
