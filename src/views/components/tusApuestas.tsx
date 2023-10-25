import React from 'react';
import Delete from '@/assets/delete.svg';
import '@/toggle.css';

const TusApuestas = ({ isOpen, selectedMatches, removeMatchFromCart }) => {
    return (
        <div className={`tus-apuestas ${isOpen ? 'open' : ''}`}>
            <div className="content">
                <p>Tus apuestas:</p>
                <ul>
                    {selectedMatches && selectedMatches.length > 0 ? (
                        selectedMatches.map((match, index) => (
                            <li key={index} className="li-match">
                                {match} <button onClick={() => removeMatchFromCart(index)} className="delete"><img src={Delete} alt="Delete" /></button>
                            </li>
                        ))
                    ) : (
                        <li>No hay Apuestas todavia, regresa y prueba tu suerte</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TusApuestas;








