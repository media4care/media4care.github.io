import styled from "styled-components";
import { Headline, EmphasisSpan } from "./typography";
import { Color } from "./colors";
import "./fonts.css";

const background1 = "#dddddd";
const background2 = "#bbbbbb";

const MemberProfile: React.FC<{src: string, name: string, title: string}> = ({src, name, title}) => (
  <Member>
    <AvatarContainer><img src={src} /></AvatarContainer>
    <EmphasisSpan color={Color.secondary70}>{name}</EmphasisSpan>
    <EmphasisSpan color={Color.secondary30} size="large">{title}</EmphasisSpan>
  </Member>
);


const Value: React.FC<{src: string, title: string, descr: string}> = ({src, title, descr}) => (
  <ValueLayout>
    <StackLogo><img src={src} /></StackLogo>
    <ValueText>
      <EmphasisSpan color={Color.secondary70}>{title}</EmphasisSpan>
      <EmphasisSpan color={Color.secondary30} size="large">{descr}</EmphasisSpan>
    </ValueText>
  </ValueLayout>
);

const Counter: React.FC<{src: string, title: string, descr: string}> = ({src, title, descr}) => (
  <ValueLayout>
    <StackLogo><img src={src} /></StackLogo>
    <ValueText>
      <EmphasisSpan size="xxx-large" color={Color.secondary70}>{title}</EmphasisSpan>
      <EmphasisSpan color={Color.secondary30} size="large">{descr}</EmphasisSpan>
    </ValueText>
  </ValueLayout>
);

function App() {
  return (
    <Layout>
      <Header>
        <Headline size="xxx-large" color={Color.secondaryFFF}>THE TEAM</Headline>
        <Headline size="xx-large" color={Color.secondary20}>meet the devs behind the curtain</Headline>
      </Header>
      <Team background={background1}>
        <MemberProfile src="peter.png" name="Peter" title="Head of Devs"/>
        <MemberProfile src="brian.png" name="Brian" title="Sr. Software Developer"/>
        <MemberProfile src="stewie.jpg" name="Stewie" title="Sr. Software Developer"/>
        <MemberProfile src="cleveland.jpg" name="Cleveland" title="Jr. Software Developer"/>
        <MemberProfile src="quagmire.jpg" name="Quagmire" title="QA"/>
      </Team>
      <Stack background={background2}>
        <Headline size="xx-large" color={Color.secondaryFFF}>THE STACK</Headline>
        <StackLogos>
          <StackLogo><img src="ionic.svg" /></StackLogo>
          <StackLogo><img src="react.svg" /></StackLogo>
          <StackLogo><img src="ts.svg" /></StackLogo>
          <StackLogo><img src="graphql.svg" /></StackLogo>
          <StackLogo><img src="postgraphile.svg" /></StackLogo>
          <StackLogo><img src="terraform.svg" /></StackLogo>
          <StackLogo><img src="aws.svg" /></StackLogo>
          <StackLogo><img src="circleci.svg" /></StackLogo>
        </StackLogos>
      </Stack>
      <Stack background={background1}>
        <Headline size="xx-large" color={Color.secondaryFFF}>OUR TEAM VALUES</Headline>
        <ValueLogos>
          <Value src="001-blocks.svg" title="High quality" descr="Aliquam lobortis vestibulum mi vel condimentum. Praesent eu mi lectus. Etiam sed nulla nec dui pellentesque auctor. Sed tempus, sem quis convallis ultricies, lectus erat posuere arcu, at vehicula libero dui fermentum nibh. Pellentesque scelerisque dui libero, a consectetur nulla vulputate in. Vestibulum laoreet rutrum vulputate. Etiam vel diam nec dolor ornare varius quis ac mi." />
          <Value src="002-team.svg" title="We are a team" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum vitae nunc in euismod. Aliquam facilisis quam a semper venenatis. In id mollis ipsum. Nunc vel pharetra lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis non turpis dui. Pellentesque auctor libero sit amet urna sollicitudin, ac maximus leo fermentum. Suspendisse potenti. Integer a ultricies tortor, sed imperdiet metus. Vivamus et ultrices arcu." />
          <Value src="004-talking.svg" title="Open communication" descr="Cras tincidunt egestas ex, at imperdiet massa rhoncus et. Etiam commodo nibh in urna pulvinar maximus. Maecenas iaculis ante orci, non commodo dui sagittis eget." />
          <Value src="005-big-family.svg" title="Purpose" descr="Proin quis fermentum odio, nec tincidunt sem. Sed eu sapien pulvinar, elementum purus vitae, vulputate mauris. Nulla in convallis ex, vitae maximus dui. Vivamus consequat ut nisl quis convallis. In hendrerit elementum diam, sit amet finibus massa eleifend ac. Pellentesque nec sem sodales, lobortis erat ut, tempor neque. Maecenas felis sem, ultrices eget eleifend in, ornare et odio. Donec ligula quam, ullamcorper quis laoreet imperdiet, maximus a tellus. Nunc enim justo, tincidunt sit amet libero id, fringilla blandit dolor.

" />
        </ValueLogos>
      </Stack>
      <Stack background={background2}>
        <Headline size="xx-large" color={Color.secondaryFFF}>THE PRODUCT</Headline>
        <ProductImages>
          <ProductImage><img src="b2c2.png" /></ProductImage>
          <ProductImage><img src="b2c1.png"  /></ProductImage>
        </ProductImages>
      </Stack>
      <Stack background={background1}>
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

const Team = styled(Section)<{background: string}>`
background: ${p => p.background };
flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Stack = styled(Section)<{background: string}>`
  background: ${p => p.background};
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 32px;

`;

const StackLogos = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 0;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProductImages = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProductImage = styled.div`
  overflow: hidden;
  width: auto;
  height: 400px;
  margin: 8px;
  display: flex;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
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
  justify-content: space-around;
  flex-wrap: wrap;
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
  text-align: center;
  span {
    margin-bottom: 8px;
  }
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
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
`;

export default App;
