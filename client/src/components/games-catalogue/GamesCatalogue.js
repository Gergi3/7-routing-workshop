import { GameItem } from "./game-item/GameItem";

export const GamesCatalogue = ({
    games
}) => {

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(game => <GameItem key={game._id} game={game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
};
