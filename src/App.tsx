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


const Value: React.FC<{src: string, title: string, descr: string}> = ({src, title, descr}) => (
  <ValueLayout>
    <StackLogo><img src={src} /></StackLogo>
    <ValueText>
      <EmphasisSpan color={Color.secondary70}>{title}</EmphasisSpan>
      <EmphasisSpan color={Color.secondary60} size="large">{descr}</EmphasisSpan>
    </ValueText>
  </ValueLayout>
);

const Counter: React.FC<{src: string, title: string, descr: string}> = ({src, title, descr}) => (
  <ValueLayout>
    <StackLogo><img src={src} /></StackLogo>
    <ValueText>
      <EmphasisSpan size="xxx-large" color={Color.secondary70}>{title}</EmphasisSpan>
      <EmphasisSpan color={Color.secondary60} size="large">{descr}</EmphasisSpan>
    </ValueText>
  </ValueLayout>
);

function App() {
  return (
    <Layout>
      <Header >
        <Headline size="xxx-large" color={Color.secondaryFFF}>THE TEAM</Headline>
        <Headline size="xx-large" color={Color.secondary30}>meet the devs behind the curtain</Headline>
      </Header>
      <Team>
        <MemberProfile src="peter.png" name="Peter" title="Head of Devs"/>
        <MemberProfile src="brian.png" name="Brian" title="Sr. Software Developer"/>
        <MemberProfile src="stewie.jpg" name="Stewie" title="Sr. Software Developer"/>
        <MemberProfile src="cleveland.jpg" name="Cleveland" title="Jr. Software Developer"/>
        <MemberProfile src="quagmire.jpg" name="Quagmire" title="QA"/>
      </Team>
      <Stack >
        <Headline size="xx-large" color={Color.secondaryFFF}>THE STACK</Headline>
        <StackLogos>
          <StackLogo><img src="ionic.svg" /></StackLogo>
          <StackLogo><img src="react-icon.svg" /></StackLogo>
          <StackLogo><img src="ts.svg" /></StackLogo>
          <StackLogo><img src="graphql.svg" /></StackLogo>
          <StackLogo><img src="postgraphile.svg" /></StackLogo>
        </StackLogos>
      </Stack>
      <Stack >
        <Headline size="xx-large" color={Color.secondaryFFF}>OUR TEAM VALUES</Headline>
        <ValueLogos>
          <Value src="001-blocks.svg" title="High quality" descr="Cras tincidunt egestas ex, at imperdiet massa rhoncus et. Etiam commodo nibh in urna pulvinar maximus. Maecenas iaculis ante orci, non commodo dui sagittis eget." />
          <Value src="002-team.svg" title="We are a team" descr="Cras tincidunt egestas ex, at imperdiet massa rhoncus et. Etiam commodo nibh in urna pulvinar maximus. Maecenas iaculis ante orci, non commodo dui sagittis eget." />
          <Value src="004-talking.svg" title="Open communication" descr="Cras tincidunt egestas ex, at imperdiet massa rhoncus et. Etiam commodo nibh in urna pulvinar maximus. Maecenas iaculis ante orci, non commodo dui sagittis eget." />
          <Value src="005-big-family.svg" title="Purpose" descr="Cras tincidunt egestas ex, at imperdiet massa rhoncus et. Etiam commodo nibh in urna pulvinar maximus. Maecenas iaculis ante orci, non commodo dui sagittis eget." />
        </ValueLogos>
      </Stack>
      <Stack >
        <Headline size="xx-large" color={Color.secondaryFFF}>THE PRODUCT</Headline>
        <ProductImages>
          <ProductImage><img src="b2c2.png" /></ProductImage>
          <ProductImage><img src="b2c1.png"  /></ProductImage>
        </ProductImages>
      </Stack>
      <Stack >
        <Headline size="xx-large" color={Color.secondaryFFF}>SOME COUNTERS</Headline>
        <Counters>
          <Counter src="002-speak.svg" title="1234" descr="Messages sent" />
          <Counter src="003-video-call.svg" title="1234" descr="Videocall minutes" />
          <Counter src="001-pictures.svg" title="1234" descr="Pictures sent" />
        </Counters>
      </Stack>
    </Layout>
  );
}

const Layout = styled.div`
  font-family: "DINPro Bold", "Roboto Condensed", sans-serif;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
`;

const Header = styled(Section)`
  background: grey;
  min-height: 200px;
  background: linear-gradient(90deg, #1496BF 0%, #0169C2 100%);
  justify-content: center;
  span {
    align-self: center;
  }
  padding: 16px;
`;

const Member = styled.div`
  display:flex;
  flex-direction: column;
`;

const Team = styled(Section)`
  background: ${Color.secondary30};
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Stack = styled(Section)`
  background: darkgrey;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 0;

`;

const StackLogos = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 0;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0;
  height: 550px;
`;

const ProductImage = styled.div`
  height: 100%;
  overflow: hidden;
  img {
    object-fit: contain;
    height: 100%;
  }
  margin-right: 32px;
`;


const ValueLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const ValueLogos = styled.div`
  display: flex;
  padding: 32px 0;
`;

const Counters = styled.div`
  display: flex;
  padding: 32px 0;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ValueText = styled.div`
  display:flex;
  flex-direction: column;
  margin: 16px;
  align-items: center;
`;

const AvatarContainer = styled.div`
  background-color: white;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: -4px 4px 8px 0px rgba(0, 0, 0, 0.32);
  margin: 16px;

  img {
    width: 100%;
    height: auto;
  }
`;

const StackLogo = styled.div`
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin: 8px;

  img {
    width: 100%;
    height: auto;
  }
`;

export default App;
