import React, { useEffect } from 'react';
import { fetchPokemonApi } from './apis';

const App = props => {
  const fetchPokemon = async () => await fetchPokemonApi(); // Đổi tên hàm thành fetchPokemonApi
  useEffect(() => {
    fetchPokemon();
  }, []);
  return <div>List pokemon</div>;
};

export default App;
