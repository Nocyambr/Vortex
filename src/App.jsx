import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { gamesData } from "./data/games.js";
import { GameCard } from "./components/GameCard.jsx";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("jogos");
  const [search, setSearch] = useState("");

  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">
        <Header search={search} setSearch={setSearch} />

        <div className="vortex-content">

          {activeTab === "dash" && (
            <h2 className="section-title">Dashboard</h2>
          )}

          {activeTab === "jogos" && (
            <>
              <h2 className="section-title">Jogos Recentes</h2>

              <div className="vortex-grid">
                {filteredGames.length > 0 ? (
                  filteredGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))
                ) : (
                  <p>Nenhum jogo encontrado...</p>
                )}
              </div>
            </>
          )}

          {activeTab === "perfil" && (
            <h2 className="section-title">Perfil</h2>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;