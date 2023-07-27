import React, { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

export default function App() {
  const [currentComponent, setCurrentComponent] = useState('Component1');

  const handleComponentChange = (componentName) => {
    setCurrentComponent(componentName);
  };

  const user = [
    {
      current: 'Component1',
      component: <Component1 onComponentChange={handleComponentChange} />,
    },
    {
      current: 'Component2',
      component: <Component2 onComponentChange={handleComponentChange} />,
    },
    {
      current: 'Component3',
      component: <Component3 onComponentChange={handleComponentChange} />,
    },
  ];

  const userChoice = user.find((user) => user.current === currentComponent);

  return <div>{userChoice.component}</div>;
}
