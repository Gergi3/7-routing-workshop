import { useState, } from "react";

import { validateComment } from "../../validators/commentValidator";

export const CreateComment = ({
    createCommentHandler
}) => {
    const defaultState = {
        username: '',
        comment: ''
    }
    const [state, setState] = useState(defaultState);

    const formChangeHandler = (e) => {
        setState(old => ({
            ...old,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setState({...defaultState});
        createCommentHandler(state)
    }

    const invalidFields = validateComment(state);
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={submitHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={state.username}
                    onChange={formChangeHandler}
                />
                {invalidFields.username && state.username !== '' &&
                    <div style={{color: 'red'}}>Invalid username</div>
                }
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={state.comment}
                    onChange={formChangeHandler}
                />
                {invalidFields.comment &&
                    <div style={{color: 'red'}}>Invalid comment</div>
                }
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                    disabled={Object.values(invalidFields).length > 0}
                />
            </form>
        </article>
    )
};
