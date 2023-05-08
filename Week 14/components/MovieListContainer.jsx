//container for all the Movie components + data 
import React from 'react';
import Movie from './movie';

export default class MovieListContainer extends React.Component {
    constructor(props) {
        // to be able to pass it down from parent to child
        super(props);
        this.state = {
            // object below is going to house each of the names with the accounts associated with the names
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }


    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                // if the name already exists, then count up by +1
                ? state.counts[name] += 1
                // otherwise, it will be '1' 
                : state.counts[name] = 1;
            
            // if statement to compare # of count, then set the new state with the highest count associated with the new 'name'
            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        });
    }

    render() {
        return (
            <div className='col text-center'>              
                <Movie />
            </div>
        );
    }
}