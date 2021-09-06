import styled from "styled-components";
import { Headline, EmphasisSpan } from "./typography";
import { Color } from "./colors";
import "./fonts.css";

const MemberProfile: React.FC<{src: string, name: string, title: string}> = ({src, name, title}) => (
  <Member>
    <AvatarContainer><img src={src} /></AvatarContainer>
    <EmphasisSpan color={Color.secondary70}>{name}</EmphasisSpan>
    <EmphasisSpan color={Color.secondary60} size="large">{title}</EmphasisSpan>

  </Member>
);

function App() {
  return (
    <Layout>
      <Header >
        <Headline size="xxx-large" color={Color.secondary70}>THE TEAM</Headline>
        <Headline size="xx-large" color={Color.secondary60}>meet the devs behind the curtain</Headline>
      </Header>
      <Team>
        <MemberProfile src="peter.png" name="Peter" title="Head of Devs"/>
        <MemberProfile src="brian.png" name="Brian" title="Sr. Software Developer"/>
        <MemberProfile src="stewie.jpg" name="Stewie" title="Sr. Software Developer"/>
        <MemberProfile src="cleveland.jpg" name="Cleveland" title="Jr. Software Developer"/>
        <MemberProfile src="quagmire.jpg" name="Quagmire" title="QA"/>
      </Team>
      <Stack />
    </Layout>
  );
}

const Layout = styled.div`
  font-family: "DINPro Bold", "Roboto Condensed", sans-serif;
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

const Member = styled.div`
display:flex;
flex-direction: column;
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
