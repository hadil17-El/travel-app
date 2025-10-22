import React, { useEffect } from "react";
import "./LoadingP.css";

const Loading = ({ setIsLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 5000); // ⏱️ più realistico
    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <div className="loading-container">
      <h1 className="loading-text">
        <div className="travel-word">
          {"Travel".split("").map((letter, index) => (
            <span key={index} className="letter" style={{ "--i": index }}>
              {letter}
            </span>
          ))}
        </div>
      </h1>

      <div
        className="airplane"
        style={{ backgroundImage: "url('/imgs/aereo.png')" }}
      ></div>
    </div>
  );
};

export default Loading;
