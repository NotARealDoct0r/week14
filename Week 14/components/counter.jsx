import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        // created a bind to shorten verbose code
        this.handleClick = this.handleClick.bind(this);
    }

    // created method to manage/keep count of the current state (functionality is passed down from the parent)
    handleClick() {
        this.props.action(this.props.name);
    }

    render() {
        // created a button using JS + specified action upon user clicking
        return (
            <button 
                className="btn btn-primary"
                onClick={this.handleClick}>
                {this.props.name} {this.props.count}
            </button>
        );
    }
}