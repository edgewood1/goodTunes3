import React from "react";
import styled from "styled-components";
import {Button} from "../assets_css/nav_css";
import {connect } from 'react-redux';

const Foot = styled.button`
margin: "3%",
backgroundColor: "#44db0d",
width: "75%",
justifyContent: "center",
marginLeft: "15%"
`;
//first button
// backgroundColor: "#f5d21f",

const Footer = (props) => {
  console.log(props)
  return(
    
            <Button>
              <img alt="meaningful" src={props.e.source} />
              <Foot
                onClick={() => this.playTunes(props.e)}
        
             
                
            
              >
                Play
              </Foot>
              {props.state.changeState.allTunesShow ? (
                <Foot
                  onClick={() => this.saveTunes(props.e)}
               
                >
                  Save
                </Foot>
              ) : (
                <Foot onClick={() => this.deleteTunes(props.e)}>
                  }
                  Delete 
                </Foot>
              )}
            </Button>

  
  )}


const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(Footer)