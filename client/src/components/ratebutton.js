
import React, {Fragment} from "react";
import Rating from "react-rating";
import {
  RateDiv
} from "../assets_css/playList_css";


const RateButton = (e) => {
  
  console.log(e)
  return(
<Fragment>
    <RateDiv>
        <Rating
          key={e._id}
          start={0}
          step={1}
          stop={5}
          usersRated={e.usersRated}
          average={e.average}
          votes={e.votes}
          emptySymbol="glyphicon glyphicon-star-empty"
          initialRating={e.average}
          fullSymbol="glyphicon glyphicon-star"
          onClick={value => this.boundClick4(value, e)}
        />
      </RateDiv>
              <p style={{ padding: "4%", color: "white", fontSize: "1.1em" }}>
                Votes: {e.votes}
              </p>
              </Fragment>
  )
  
}

export default RateButton;