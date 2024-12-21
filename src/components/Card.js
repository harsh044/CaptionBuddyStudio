import React from "react";
import "./Card.css";
import { FaRegCopy } from "react-icons/fa";

const Card = ({ captions }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    alert("Copied to clipboard!"); // Optional: Show confirmation
  };

  return (
    <div className="card">
      {captions.map((caption, index) => (
        <div key={index} className="card">
          <p>{caption}</p>
          <FaRegCopy
            className="copy-icon"
            onClick={() => handleCopy(caption)}
            title="Copy to clipboard"
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
