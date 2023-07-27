import React from 'react';

export default function Component1({ onComponentChange }) {
  const handleComponentChange = () => {
    onComponentChange('Component2');
  };

  return (
    <div>
      <ul>
        <li onClick={handleComponentChange}>Projetos</li>
      </ul>
    </div>
  );
}
