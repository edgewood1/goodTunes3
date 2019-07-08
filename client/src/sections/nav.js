import React, { Component } from "react";
import {connect } from 'react-redux';
import API from "../utils/API";
import {fetchScrape, saveTunes} from '../actions'
 
import {Wrapper, HeaderWrapper, Header, Body, Button} from '../assets_css/nav_css'

 class Nav extends Component {

  // scrape tunes 

  scrape = () => {
    // 1.. send message to state: scraping... 

    console.log("scrape")
    // API.scrape()
    //   .then(res => {
    //     this.addScrapeToDb(res["data"]);
    //   })
    //   .catch(err => console.log(err));
    this.props.fetchScrape().then(()=> {
      console.log(this.props.posts.scrapes)
      console.log(this.props.posts.allTunes)
    //   this.props.saveTunes(this.props.posts.scrapes).then(res=> {
    //     console.log(res)
    //   .catch(err => console.log(err))
    // })
    })
  //   .then(res1 => {
  //     console.log(res1)
  //     this.props.saveTunes(this.props.scrapes).then(res=> {
  //       console.log(res)
  //     .catch(err => console.log(err))
  //   })
  //   console.log(this.props)
 

  // })
}

  addScrapeToDb = () => {
    
        this.props.saveTunes(this.props.scrapes).then(res=> {
        console.log(res)
      .catch(err => console.log(err))
    })
    // add to state
  };

  getPlaylist = () => {

  };

 

  // 2 - see db tunes

  getAllTunes = (props) => {
    // change state so that logINShow 0, alltunesshow - 1, message - all available tunes
    // hwo to change the state? 
    // mapstate to dispatch
    // console.log(this.props)
  
    // this.props.changeState("allTunesShow")
  };
  // 3. get user tunes

  getUserTunes = () => {
 
  };

  // 4 log out

  handleLogOut = () => {
 
  };

  render() {
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

            <Button onClick={() => this.getUserTunes(this.props)}>
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
  return { fetchScrape: state.fetchScrape, saveTunes: state.saveTunes, posts: state.posts }
}

export default connect(mapStateToProps, {fetchScrape, saveTunes} )(Nav)

 