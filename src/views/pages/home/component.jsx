import React, { useState } from 'react';
import Match from '@/views/components/loader/match';
import ApNavbar from '@/views/pages/home/navbar';
import MatchList from '@/views/components/loader/matchList';
import TusApuestas from '@/views/components/tusApuestas';

const Home = () => {
  const [selectedMatches, setSelectedMatches] = useState([]);
  const [isOpen, setIsOpen] = useState(false);  

  const addMatchToCart = (match) => {
    setSelectedMatches([...selectedMatches, match]);
  };

  const removeMatchFromCart = (index) => {
    const updatedMatches = [...selectedMatches];
    updatedMatches.splice(index, 1);
    setSelectedMatches(updatedMatches);
  };

  const toggleTusApuestas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ApNavbar isOpen={isOpen} toggleTusApuestas={toggleTusApuestas} />
      <h2>En estos partidos puedes apostar:</h2>
      <MatchList>
        <Match addMatchToCart={addMatchToCart} />
        <TusApuestas selectedMatches={selectedMatches} removeMatchFromCart={removeMatchFromCart} isOpen={isOpen} />
      </MatchList>
    </>
  );
};

export default Home

