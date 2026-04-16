import "./GameCard.css";
import { Play } from "lucide-react";

export function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.banner} alt={game.title} />

      <div className="game-info">
        <h3>{game.title}</h3>
        <span className="game-category">{game.category}</span>

        <button className="play-button" type="button">
          <Play size={16} />
          Play
        </button>
      </div>
    </div>
  );
}