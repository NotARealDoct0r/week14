// tried messing around with the same layout as "movielistcontainer.jsx" but could not figure it out... also tried the simpler way of importing a 'container' 
// from ('@material-ui/core/Container') but ran into erros while trying to install 
//  website - https://www.geeksforgeeks.org/how-to-use-container-component-in-reactjs/#

// import React from 'react';
// import Movie from './movie';
// import StarRating from '../StarRating';

// export default class ReviewListContainer extends React.Component {
//     constructor(props) {
//         // to be able to pass it down from parent to child
//         super(props);
//         this.state = {
//             // object below is going to house each of the names with the accounts associated with the names
//             reviewForm: [],
//             movieName: ''
//         };
//         this.onClick = this.onClick.bind(this);
//     }


//     onClick(name) {
//         this.setState(state => {
//             state.reviewForm.push[name]
    
//             return state;
//         });
//     }

//     render() {
//         return (
//             <div className='col text-center'>              
//                 <StarRating />
//             </div>
//         );
//     }
// }