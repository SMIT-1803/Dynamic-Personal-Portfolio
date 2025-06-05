import React from "react";


function FallingDotsBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden " style={{ backgroundColor: "#212121" }}>
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

export default FallingDotsBackground;
