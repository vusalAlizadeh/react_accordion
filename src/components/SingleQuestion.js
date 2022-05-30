import React, { useState } from "react";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
function SingleQuestion({ question }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="questionTitle">
      <header>
        <h2>{question.title}</h2>
        <button
          className="questionButton"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <BsDashCircle /> : <BsPlusCircle />}
        </button>
      </header>
      {showInfo && <p>{question.info}</p>}
    </div>
  );
}

export default SingleQuestion;
