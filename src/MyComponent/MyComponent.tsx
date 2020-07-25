import React, { useState, useEffect } from 'react';

interface ComponentProps {
  name?: string;
}

const MyComponent: React.FunctionComponent<ComponentProps> = ({ name = 'Bob' }) => {
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    alert(`${name} likes you too!`);
  }, [likes])
  
  return (
    <React.Fragment>
      <p>Likes for {name}</p>
      <button 
        onClick={() => {
          setLikes(likes + 1)
        }}
      >
        Like
      </button>
    </React.Fragment>
  );
}

export default MyComponent;
