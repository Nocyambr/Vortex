import "./GameCard.css";
import { Play } from "lucide-react";

export function GameCard({ game, onPlay, isFavorite, onFavorite }) {
  return (
    <div className="game-card">
      <div
        className={`favorite-button ${isFavorite ? "active" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
          onFavorite();
        }}
      >
        {isFavorite ? "♥" : "♡"}
      </div>

      <img src={game.banner} alt={game.title} />

      <div className="game-info">
        <h3>{game.title}</h3>
        <span className="game-category">{game.category}</span>

        <button className="play-button" type="button" onClick={onPlay}>
          <Play size={16} />
          Play
        </button>
      </div>
    </div>
  );
}