import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import * as gameServices from './services/gameServices';

import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { GamesCatalogue } from "./components/games-catalogue/GamesCatalogue";
import { CreateGame } from "./components/create-game/CreateGame";
import { GameDetails } from "./components/game-details/GameDetails";
import { EditGame } from "./components/edit-game/EditGame";

function App() {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        gameServices.getAll()
            .then(res => setGames(res));
    }, []);

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/games/catalog" element={<GamesCatalogue games={games}/>} />
                <Route path="/games/create" element={<CreateGame />} />
                <Route path="/games/details" element={<GameDetails />} />
                <Route path="/games/edit" element={<EditGame />} />
            </Routes>
        </div>
    );
}

export default App;
