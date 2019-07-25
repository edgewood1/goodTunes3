
import React, {Fragment} from "react";
import Rating from "react-rating";
import {connect } from 'react-redux'; 
import {saveTunes} from '../actions';


import PlayButton from './playButton'
import {
  Container,
  Header,
  Names,
  Buttons,
  LargeFont,
  MedFont,
  PlayDeleteButton,
  RateDiv
} from "../assets_css/playList_css";



const RateButton = (props) =>  {
 var e = props.send.e
 console.log(e)
  var saveTunes = props.send.props.saveTunes
  return(
    <Fragment>
      <Header key={e.e._id +1}>
        <Names>
          <LargeFont>{e.e.artist}</LargeFont>
          <MedFont> {e.e.title} </MedFont>
          {/* <RateButton e={e} />  */}
          <RateDiv>
            <Rating
              key={e.e._id}
              start={0}
              step={1}
              stop={5}
              usersRated={e.e.usersRated}
              average={e.e.average}
              votes={e.e.votes}
              emptySymbol="glyphicon glyphicon-star-empty"
              initialRating={e.e.average}
              fullSymbol="glyphicon glyphicon-star"
              onClick={value => this.boundClick4(value, e)}
            />
          </RateDiv>
            <p style={{ padding: "4%", color: "white", fontSize: "1.1em" }}>
              Votes: {e.e.votes}
            </p>
        </Names>
        <Buttons>
              <img alt="meaningful" src={e.e.source} />
              <PlayButton e={e.e} /> 
              {e.props.allTunesShow ? (
                <PlayDeleteButton onClick={() => saveTunes(e)}>
                  Save
                </PlayDeleteButton>
              ) : (
                <PlayDeleteButton onClick={() => this.deleteTunes(e)}>
                  Delete 
                </PlayDeleteButton>
              )}
            </Buttons>
          </Header>
        {/* ))} */}
       
              </Fragment>
  )
  
}

 
const mapStateToProps = (state) => {
  return {  posts: state.posts  }
}

export default connect(mapStateToProps, {saveTunes} )(RateButton)

//  export default RateButton