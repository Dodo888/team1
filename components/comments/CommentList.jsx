import React from 'react';
import Comment from "./Comment.jsx";
import styles from './CommentList.styl';

export default class CommentList extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            comments: params.comments
        };
    }

    render() {
        var commentNodes = this.state.comments.map(
            (comment) => <Comment {...comment} key={comment._id} />);
        return (
            <div className="comment-list__header">
                Комментарии:
            </div>
            <ul>
                {commentNodes}
            </ul>
        );
    }
}
