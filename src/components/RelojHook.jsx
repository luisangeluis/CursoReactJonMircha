import React, { useEffect, useState } from 'react';

const Reloj = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, []);

  const iniciarRelog = () => {
    setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    setVisible(true);
  };

  const detenerRelog = () => {};

  return (
    <div>
      <p>{hour}</p>
    </div>
  );
};

export default Reloj;
