import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ person, message, numbers, funcion, reactElement }) => {
  // console.log(person);
  return (
    <>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>Propiedad por defecto: {message}</div>
      <div>{numbers.map(funcion)}</div>
      <ul>{reactElement}</ul>
    </>
  );
};

// Propiedades por defecto
MyComponent.defaultProps = {
  message: 'Hola soy un mensaje',
};
MyComponent.propTypes = {
  person: PropTypes.object.isRequired,
};

export default MyComponent;
