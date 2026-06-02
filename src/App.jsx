import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { gamesData } from "./data/games.js";
import { GameCard } from "./components/GameCard.jsx";
import { GameModal } from "./components/GameModal.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("jogos");
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  const favoriteGames = gamesData.filter((game) =>
    favorites.includes(game.id)
  );

  function mostrarToast() {
    toast.success("Jogo selecionado com sucesso!", {
      toastId: "jogo-selecionado",
    });
  }

  function toggleFavorite(game) {
    const isAlreadyFavorite = favorites.includes(game.id);

    if (isAlreadyFavorite) {
      setFavorites(favorites.filter((id) => id !== game.id));

      toast.info(`${game.title} removido dos favoritos`, {
        toastId: `favorite-${game.id}`,
      });
    } else {
      setFavorites([...favorites, game.id]);

      toast.success(`${game.title} adicionado aos favoritos`, {
        toastId: `favorite-${game.id}`,
      });
    }
  }

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
                    <GameCard
                      key={game.id}
                      game={game}
                      isFavorite={favorites.includes(game.id)}
                      onFavorite={() => toggleFavorite(game)}
                      onPlay={() => {
                        setSelectedGame(game);
                        mostrarToast();
                      }}
                    />
                  ))
                ) : (
                  <p>Nenhum jogo encontrado...</p>
                )}
              </div>
            </>
          )}

          {activeTab === "perfil" && (
            <>
              <h2 className="section-title">Meus Favoritos</h2>

              {favoriteGames.length > 0 ? (
                <div className="vortex-grid">
                  {favoriteGames.map((game) => (
                    <GameCard
                      key={game.id}
                      game={game}
                      isFavorite={favorites.includes(game.id)}
                      onFavorite={() => toggleFavorite(game)}
                      onPlay={() => {
                        setSelectedGame(game);
                        mostrarToast();
                      }}
                    />
                  ))}
                </div>
              ) : (
                <p className="empty-message">
                  Você ainda não adicionou nenhum jogo aos favoritos.
                </p>
              )}
            </>
          )}
        </div>
      </main>

      {selectedGame && (
        <GameModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
}

export default App;