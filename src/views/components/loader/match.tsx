import React, { useState } from 'react';
import '@/match.css';

const LIST_MATCHS = [
    {
      id: 1,
      team1: 'COLOMBIA',
      team2: 'BRASIL',
      outcomes: [
        { title: 'Gana Colombia', odds: 2.5 },
        { title: 'Empate', odds: 1.5 },
        { title: 'Gana Brasil', odds: 0.9 },
      ],
    },
    {
      id: 2,
      team1: 'BOLIVIA',
      team2: 'ECUADOR',
      outcomes: [
        { title: 'Gana Bolivia', odds: 2.0 },
        { title: 'Empate', odds: 2.0 },
        { title: 'Gana Ecuador', odds: 2.1 },
      ],
    },
    {
      id: 3,
      team1: 'ARGENTINA',
      team2: 'PERU',
      outcomes: [
        { title: 'Gana Argentina', odds: 1.5 },
        { title: 'Empate', odds: 2.4 },
        { title: 'Gana Peru', odds: 3.0 },
      ],
    },
  ];

const Match = ({ addMatchToCart }) => {
  return (
    <div className="match">
      {LIST_MATCHS.map((match) => (
        <div key={match.id} className="one">
          <div className="partidos">
            <p>{`${match.team1} VS ${match.team2}`}</p>
          </div>
          <div className="buttons">
            {match.outcomes.map((outcome) => (
              <button
                key={outcome.title}
                onClick={() => addMatchToCart(`${match.team1} VS ${match.team2} ${outcome.title} ${outcome.odds}`)}
              >
                {`${outcome.title} ${outcome.odds}`}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Match;



