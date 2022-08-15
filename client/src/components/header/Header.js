import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>
                <Link className="home" to="/">GamesPlay</Link>
            </h1>
            <nav>
                <Link to="/games/catalog">All games</Link>
                <div id="user">
                    <a href="/games/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
};
