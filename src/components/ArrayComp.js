// ArrayComponent.jsx
import React, { useState } from 'react';

function ArrayComponent() {
  const [items, setItems] = useState(["1", "2", "3", "4", "5", "6"]);

  return (
    <div>
      <h1>Items:</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayComponent;
