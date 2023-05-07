import React from 'react';
// these imports allows access to these classes/components from (inside) the 'comments' component
import ReplyButton from './reply-button';
import LikeButton from './like-button';

// created a shorter variable to reference numerous times
let e = React.createElement;

// this allows the class accessible outside of this file (when webpack bundles everything)
export default class Comment extends React.Component {
    render () {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    {this.props.username} {this.props.date}
                </div>
                <div className="card-body">
                    {/* JS below - 'content' is the matching attribute from post.js file */}
                    {this.props.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );
    }
}