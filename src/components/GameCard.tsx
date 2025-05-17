// src/components/GameCard.tsx
import React from "react";

type GameCardProps = {
  title: string;
  image: string;
  rating: number;
  onClick: () => void;
};

const GameCard: React.FC<GameCardProps> = ({ title, image, rating, onClick }) => {
  const stars = Array(5)
    .fill(false)
    .map((_, i) => i < rating);

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        padding: "10px",
        width: "140px",
        textAlign: "center",
        cursor: "pointer",
        color: "#fff",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ 
          width: "100%", 
          height: "120px", 
          borderRadius: "5px", 
          objectFit: "cover",
          background: "#f3f3f3" // set background color for image area
        }}
      />
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{title}</p>
      <div>
        {stars.map((filled, i) => (
          <span key={i} style={{ color: filled ? "#FFD700" : "#444" }}>★</span>
        ))}
      </div>
    </div>
  );
};

export default GameCard;
