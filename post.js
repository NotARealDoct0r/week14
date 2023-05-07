import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Post extends React.Component {
    // added a constructor to 'Post' class to make it more dynamic (using / making changes to the 'state')
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
            count: 0
        };
    }

    render() {
// since React renders at the optimal time, developers can't always rely on it. therefore, created variable below to demo manual update 
        // let tempComments = this.state.comments;
// invoke setstate to update just the 'content' string + 'comments' (after 2 seconds)
        // setTimeout(() => this.setState({content: 'state updated', comments: []}, 
        //     () => setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000);
        
        // overrided version of setState + console log just to see 
        setTimeout(() => this.setState(state => ({count: state.count + 1}), () => console.log(this.state.count)), 2000);
        let comments;
        // to be able to build comments - check to see if there are comments, if so then iterate every comment then add (push)
        if(this.state.comments) {
            // using the map method instead of 'for loop' below - setting key to equal index and props = comment 
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
            // for (let comment of this.state.comments) {
            //     comments.push(<Comment {...comment} />);
            // }
        }
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    {comments}
                    {/* the JS 'comments' above displays them / replacing spread operators below - passing in the 'objects' created from 
                        above without deleting any existing objects within props */}
                    {/* <Comment {...commentOne}/>
                        <Comment {...commentTwo}/>
                        <Comment {...commentThree}/> */}
                </div>
            </div>
        );
    }
}