import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

let comment = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>;


const GamesPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const logoURL = 'https://thumbs.dreamstime.com/b/soccer-football-logo-soccer-football-logo-141399153.jpg';
    const meComponents = [...Array(20).keys()].map(e => {
        return (
            <Link key={e} to={`/games/${e}`}>
                <div className="bg-gray-50 p-4 mb-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100">
                    <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                            <h3 className="font-bold">Montjuic</h3>
                            <span className="text-xs font-medium">{
                                Math.random() > 0.75
                                ? "👩👨" 
                                : Math.random() > 0.5
                                ? "👩"
                                : "👨"
                            }</span>
                        </div>
                        <p className="text-sm font-semibold">08:45</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-light text-sm animate-pulse">8v8 (2 spaces left)</p>
                        <div className="flex gap-1">
                            {Math.random() > 0.5 ? comment : null}
                            <div className="flex -space-x-1 overflow-hidden">
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <div className="text-gray-700 h-full flex flex-col">
            <header className="sticky top-0 z-50 bg-purple-500 p-4 flex flex-row justify-between content-center">
                <div className="flex items-center gap-2">
                    <Link to="/">
                        <div className="h-8 w-8 object-none rounded-full" style={{background: `url(${logoURL}) center/cover`, backgroundSize: '300%'}}></div>
                    </Link>
                    <h1 className="text-xl text-gray-50 font-semibold">Football App</h1>
                </div>
                <div className="h-8 w-8 object-none rounded-full cursor-pointer hover:shadow-lg ring-2 ring-white" style={{background: "url('https://www.zerozero.pt/img/jogadores/73/672773_med__20200513091036_jimmy_johnstone.jpg') center/cover"}}></div>
            </header>
            <main className="p-4">
                {meComponents}
            </main>
        </div>
    );
};

export default GamesPage;