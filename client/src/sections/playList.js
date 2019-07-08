import API from "../utils/API";
import React from "react";
import Rating from "react-rating";
import RateButton from '../components/ratebutton'
import {connect } from 'react-redux'; 
import PlaylistButton from '../components/playListButtons'
// import styles from "./playlist2.css";
import {
  Container,
  Header,
  Names,
  Buttons,
  LargeFont,
  MedFont,
  RateDiv
} from "../assets_css/playList_css";
import {fetchPosts} from '../actions'
 

class Books extends React.Component {
 

  componentDidMount() {
    this.props.fetchPosts()
  }


  getPlaylist = () => {
 
  };

  random = () => {
 
  };

  saveTunes = e => {
 
  };

  deleteTunes = e => {
 
  };

  updateTunes = e => {
  
  };

  playTunes = e => {
 
  };

  boundClick4 = (rating, song) => {
 
  };
  getStuff = (rating, song) => {
 
   
  };

  saveRatings = (songId, usersRated, songAvg, songVotes) => {
 
  };

  render(props) {
    
    return (
      <Container>
      {this.props.posts.allTunes.map(e => (
          <Header key={this.random()}>
            <Names>
              <LargeFont>{e.artist}</LargeFont>
              <MedFont> {e.title} </MedFont>
              {/* <RateButton e={e} />  */}
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
            </Names>
            <Buttons>
              <img alt="meaningful" src={e.source} />
              <button
                onClick={() => this.playTunes(e)}
                style={{
                  margin: "3%",
                  backgroundColor: "#f5d21f",
                  width: "75%",
                  justifyContent: "center",
                  marginLeft: "15%"
                }}
              >
                Play
              </button>
              {this.props.posts.allTunesShow ? (
                <button
                  onClick={() => this.saveTunes(e)}
                  style={{
                    margin: "3%",
                    backgroundColor: "#44db0d",
                    width: "75%",
                    justifyContent: "center",
                    marginLeft: "15%"
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => this.deleteTunes(e)}
                  style={{
                    margin: "3%",
                    backgroundColor: "#44db0d",
                    width: "75%",
                    justifyContent: "center",
                    marginLeft: "15%"
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>
              )}
            </Buttons>
          </Header>
        ))}
       
      </Container>
    );
  }
}

 
const mapStateToProps = (state) => {
  console.log(state)
  return {posts: state.posts }
}
export default connect(mapStateToProps, {fetchPosts})(Books);