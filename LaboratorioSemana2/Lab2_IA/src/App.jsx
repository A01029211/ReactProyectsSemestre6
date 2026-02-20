import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import Counter from "./components/counter";
import Loading from "./components/loading";
import PokemonCard from "./components/pokemonCard";
import "./App.css";

const TOTAL_POKEMON = 151;

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Pokédex</h1>
        <p className="app__subtitle">React Custom Hooks Demo</p>
      </header>

      <main className="app__main">
        <Counter total={TOTAL_POKEMON} onSearch={setPokemonId} />

        {loading && <Loading message="Buscando..." />}
        {error && <p className="app__error">Error: {error}</p>}
        {!loading && !error && <PokemonCard data={data} />}
      </main>

      <footer className="app__footer">
        <span>PokeAPI • React Hooks Demo</span>
      </footer>
    </div>
  );
};

export default App;