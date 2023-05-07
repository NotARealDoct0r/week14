import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
        {
            content: 'This is my post',
            username: 'Tommy',
            date: '12-12-2018'
        },
        {
            content: 'This is another post',
            username: 'Tommy',
            date: '12-13-2018'
        },
        {
            content: 'This is the last post',
            username: 'Tommy',
            date: '12-14-2018'
        }
    ];
        return (
            <div className="container">
                {/* another spread operator - calling 'comments' from above then updating the 'state' with the 'content' string */}
                <Post {...{comments: comments, content: 'This is my post content!'}}/>
                <Post {...{content:'Here is another post!'}}/>
                <Post />
            </div>
        );
    }
}