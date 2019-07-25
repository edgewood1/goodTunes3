import React, { Component } from "react";
import {connect } from 'react-redux';

import {fetchScrape, addScrape, getPlaylist, getScrapes, getUserTunes, login} from '../actions'
 
import {Wrapper, HeaderWrapper, Header, Body, Button} from '../assets_css/nav_css'

 class Nav extends Component {

  // scrape tunes 

  scrape = () => {
    // 1.. send message to state: scraping... 

    console.log("scrape")
    if (this.props.posts.scrapes.length >0) {
      console.log("getting scrapes already there")
      this.props.getScrapes()
    } else {
      this.props.fetchScrape().then(()=> {
        console.log("fetch, then add")  
        this.props.getScrapes()
      
      })
    }
 
}

  addScrapeToDb = () => {
        this.props.addScrape(this.props.scrapes).then(res=> {
        console.log(res)
      .catch(err => console.log(err))
    })
    // add to state
  };

  // 2 - see db tunes
  getAllTunes = (props) => {

    this.props.getPlaylist() 
  };

  // 3. get user tunes
  LogInCheck = () => {

    this.props.posts.login ? this.props.getUserTunes() : this.props.login(this.props.posts);
    console.log(this.props.posts.logInShow)
  };

  // 4 log out

  handleLogOut = () => {
    
  };

  render() {
    console.log(this.props)
    return (
      <Wrapper>
        <HeaderWrapper>
          <Header>
            <h1 style={{ fontSize: "275%" }}>Good Tunes</h1>
            <h2> recommended tunes from the internet </h2>
          </Header>

          <Body>
            <Button onClick={() => this.scrape()}>
              Scrape New Tunes
            </Button>

            <Button onClick={() => this.getAllTunes()}>
              See Db Tunes
            </Button>

            <Button onClick={() => this.LogInCheck()}>
              Saved PlayList
            </Button>

            <Button onClick={this.handleLogOut}>LogOut</Button>
          </Body>
        </HeaderWrapper>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {  posts: state.posts  }
}

export default connect(mapStateToProps, {getUserTunes, fetchScrape, addScrape, getPlaylist, getScrapes, login} )(Nav)

 