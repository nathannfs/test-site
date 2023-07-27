import React from 'react';

export default function Component2({ onComponentChange }) {
  const handleComponentChange1 = () => {
    onComponentChange('Component3');
  };
  const handleComponentChange2 = () => {
    onComponentChange('Component1');
  };

  return (
    <div>
      <ul>
        <li onClick={handleComponentChange1}>DVT220229</li>
        <li onClick={handleComponentChange2}>DVT220248</li>
      </ul>
    </div>
  );
}
