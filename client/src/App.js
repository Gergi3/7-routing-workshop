import { useEffect, useId, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as gameServices from './services/gameServices';
import uniqid from 'uniqid';

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
    const navigate = useNavigate();

    const createCommentHandler = (gameId, data) => {
        setGames(old => {
            const game = old.find(x => x._id === gameId)

            let newComments = game.comments || [];
            newComments.push(data);
            game.comments = newComments;

            return [...old]
        });
    }

    const addGameHandler = (data) => {
        setGames(old => ([
            ...old,
            { ...data, _id: uniqid()}
        ]));
        navigate('/games/catalog');
    }

    useEffect(() => {
        gameServices.getAll()
            .then(res => setGames(res));
    }, []);

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home games={games} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<></>} />
                <Route path="/games/catalog" element={<GamesCatalogue games={games} />} />
                <Route path="/games/create" element={<CreateGame addGameHandler={addGameHandler}/>} />
                <Route path="/games/details/:gameId" element={<GameDetails games={games} createCommentHandler={createCommentHandler} />} />
                <Route path="/games/edit" element={<EditGame />} />
            </Routes>
        </div>
    );
}

export default App;
