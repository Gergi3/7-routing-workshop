import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CreateComment } from "../create-comment/CreateComment";

export const GameDetails = ({
    games,
    createCommentHandler
}) => {
    const [game, setGame] = useState({
        comments: []
    });
    const { gameId } = useParams();

    useEffect(() => {
        const newGame = games.find(x => x._id === gameId);
        if (newGame) {
            setGame(newGame);
        }
    }, [games, gameId]);


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src="images/MineCraft.png" alt="" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments?.length > 0
                            ?
                            <ul>
                                {game.comments?.map(com =>
                                    <li className="comment" key={com.comment + com.username}>
                                        <p>{com.username}: {com.comment}</p>
                                    </li>
                                )}
                            </ul>
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>
                </div>
                <div className="buttons">
                    <Link to={`/games/edit/${game._id}`} className="button">Edit</Link>
                    <Link to={`/games/delete/${game._id}`} className="button">Delete</Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <CreateComment createCommentHandler={createCommentHandler.bind(null, game._id)} />
        </section>
    );
};
