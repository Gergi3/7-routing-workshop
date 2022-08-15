import { Route, Routes } from "react-router-dom";
import { CreateGame } from "./components/create-game/CreateGame";
import { EditGame } from "./components/edit-game/EditGame";
import { GameDetails } from "./components/game-details/GameDetails";
import { GamesCatalogue } from "./components/games-catalogue/GamesCatalogue";

import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/games/create" element={<CreateGame />} />
                <Route path="/games/edit" element={<EditGame />} />
                <Route path="/games/details" element={<GameDetails />} />
                <Route path="/games/catalog" element={<GamesCatalogue />} />
            </Routes>
        </div>
    );
}

export default App;
