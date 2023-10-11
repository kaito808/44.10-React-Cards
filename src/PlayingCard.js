import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import useFlip from "./useFlip"; // Import the custom useFlip hook

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggle] = useFlip(); // Use the useFlip hook

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggle} // Use the toggle function from useFlip
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;




// import React, { useState } from "react";
// import backOfCard from "./back.png";
// import "./PlayingCard.css"

// /* Renders a single playing card. */
// function PlayingCard({ front, back = backOfCard }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
//   return (
//     <img
//       src={isFacingUp ? front : back}
//       alt="playing card"
//       onClick={flipCard}
//       className="PlayingCard Card"
//     />
//   );
// }

// export default PlayingCard;
