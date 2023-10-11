// src/useFlip.js
import { useState } from 'react';

function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggle = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return [isFlipped, toggle];
}

export default useFlip;
