import React from "react";
import Rating from "react-rating";
// import RateButton from '../components/ratebutton'
import {connect } from 'react-redux'; 
import {fetchPosts, saveTunes} from '../actions';
// import styles from "./playlist2.css";
 import _ from 'lodash';


import PlayButton from '../components/playButton'
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



 class Books extends React.Component {

  constructor(props) {
    super(props)
  
    if (props.posts.allTunesShow) {
      props.fetchPosts()
    }
  }

  render() {
    var x = this.props.posts.showThis
    console.log(this.props)
    return (
      <Container>
        {x.length>0 ? x.map(e => 
          <Header key={_.uniqueId()}>
            <Names>
              <LargeFont>{e.artist}</LargeFont>
              <MedFont> {e.title} </MedFont>
              <RateDiv>
                <Rating
                  key={e.id}
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
            </Names>
            <Buttons>
              <img alt="meaningful" src={e.source} />
              <PlayButton e={e} /> 
              {this.props.posts.allTunesShow ? (
                <PlayDeleteButton onClick={() => this.props.saveTunes(e)}>
                  Save
                </PlayDeleteButton>
              ) : (
                <PlayDeleteButton onClick={() => this.deleteTunes(e)}>
                  Delete 
                </PlayDeleteButton>
              )}
            </Buttons>
          </Header>
              ):('')}
      </Container>
    )
    
  }
}

 
const mapStateToProps = (state) => {
  console.log(state)
  return {posts: state.posts }
}
export default connect(mapStateToProps, {fetchPosts, saveTunes})(Books);