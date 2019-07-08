import React from "react";
import styled from "styled-components";
import Container from "./sections/container.js";
import Nav from "./sections/nav.js";
import API from "./utils/API";
import Footer from "./components/footer";

const Height = styled.div``;

const Width = styled.div`
  min-height: 100%;
  border: 3px solid yellow;
  width: 100%;
  background: #464866;
`;

class App extends React.Component {


 

  // getTunes = () => {
  //   API.getSavedTunes(this.state.id).then(res => {
  //     var add = res.data.filter((e, i) => {
  //       return !this.state.savedTunes.includes(e);
  //     });

  //     this.setState({ savedTunes: add });
  //   });
  // };

  render() {
    return (
      <Width>
        <Nav   />

        <Height>
          <Container  />
        </Height>
        <Footer />
      </Width>
    );
  }
}

export default App;