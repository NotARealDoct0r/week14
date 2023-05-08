import React from 'react';
import './App.css';
import {FaStar} from "react-icons/fa";

// styled the star colors
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

// array = (represents) the # of stars, starting with 0 filled
function StarRating() {
  const stars = Array(5).fill(0);
  // specified how many stars to color when user clicks + hovers over them
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <div style={styles.container} className="StarRating">
      <h6>Movie Ratings in React</h6>
      <div style={styles.stars}>
        {/* used a map method to loop through each stars */}
        {stars.map((_, index) => {
          return (
            // used a built in function
            <FaStar 
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
              // specified the colors for when user clicks the # of stars and hovers 
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
    </div>
  );
};

// centered 
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}

export default StarRating;
