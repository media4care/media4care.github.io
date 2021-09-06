import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import { Headline } from "./typography";
import { Color } from "./colors";

function App() {
  return (
    <Layout>
      <Header >
        <Headline size="xxx-large" color={Color.secondary70}>THE TEAM</Headline>
        <Headline size="xx-large" color={Color.secondary60}>meet the devs behind the curtain</Headline>
      </Header>
      <Team>
        <AvatarContainer><img src="peter.png" /></AvatarContainer>
        <AvatarContainer><img src="brian.png" /></AvatarContainer>
        <AvatarContainer><img src="stewie.jpg" /></AvatarContainer>
        <AvatarContainer><img src="cleveland.jpg" /></AvatarContainer>
        <AvatarContainer><img src="quagmire.jpg" /></AvatarContainer>
      </Team>
      <Stack />
    </Layout>
  );
}

const Layout = styled.div`
  padding: 32px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 64px;
`;

const Header = styled(Section)`
background: grey;
min-height: 200px;

span {

  align-self: center;
}
`;



const Team = styled(Section)`
background: lightgrey;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`;

const Stack = styled(Section)`
background: darkgrey;
`;


const AvatarContainer = styled.div`
  background-color: white;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  z-index: 1;
  box-shadow: -4px 4px 8px 0px rgba(0, 0, 0, 0.32);
  margin: 16px;
  img {
    width: 100%;
    height: auto;
  }
`;

export default App;
