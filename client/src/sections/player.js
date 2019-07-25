import React from "react";
import Iframe from "react-iframe";
import {Container, Header, Header2, LargeFont} from '../assets_css/player_css'
import {connect } from 'react-redux';
import {fetchPosts} from '../actions'

class Player extends React.Component {
  render() {
    console.log(this.props)
   
    return (
      <Container>
        <Header>
          <LargeFont>{this.props.posts.message}</LargeFont>
          <hr></hr>
          <LargeFont>{this.props.posts.message2}</LargeFont>
        </Header>
        <Header2>
          {this.props.posts.play ? (
            <Iframe
              url={
                "https://open.spotify.com/embed?uri=spotify:track:" +
                this.props.posts.playerID
              }
              width="100%"
              height="20%"
              position="relative"
            />
          ) : (
            <p />
          )}
        </Header2>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPosts})(Player);
