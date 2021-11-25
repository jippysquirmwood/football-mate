import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
    );

    const places = ['Jonathan Reid', 'Peter McGonigal', 'Rod Davis', '', '', '', '', '', '','', '', ''].map((p, i) => {
        return (
            <div key={i} className="bg-gray-50 p-4 mb-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
                {p.length > 0
                ? <div className="flex justify-start gap-3">
                    <div className="h-6 w-6 object-none rounded-full ring-2 ring-purple-500" style={{background: "url('https://www.zerozero.pt/img/jogadores/73/672773_med__20200513091036_jimmy_johnstone.jpg') center/cover"}}></div>
                    <p className="font-light text-sm">{p}</p>
                </div>
                : <p className="animate-pulse text-center">Spot available!</p>
                }
            </div>
        );
    })

    return (
        <div>
            <header className="sticky top-0 z-50 bg-purple-500 p-2 flex flex-row justify-between content-center">
                <div className="flex items-center gap-2">
                    <Link to="/games">
                        {arrow}
                    </Link>
                    <h1 className="text-lg text-gray-50 font-semibold">Montjuic</h1>
                </div>
                <div className="h-6 w-6 object-none rounded-full ring-2 ring-white" style={{background: "url('https://www.zerozero.pt/img/jogadores/73/672773_med__20200513091036_jimmy_johnstone.jpg') center/cover"}}></div>
            </header>
            <main className="p-4">
                <h2 className="text-lg text-gray-800 font-bold pb-2">Players</h2>
                {places}
            </main>
        </div>
    );
};

export default Game;