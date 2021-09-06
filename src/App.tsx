import styled from "styled-components";
import { Headline, EmphasisSpan } from "./typography";
import { Color } from "./colors";
import "./fonts.css";

const background1 = "#ccc";
const background2 = "#aaa";

const MemberProfile: React.FC<{src: string, name: string, title: string}> = ({src, name, title}) => (
  <Member>
    <AvatarContainer><img src={src} /></AvatarContainer>
    <EmphasisSpan color={Color.secondary70}>{name}</EmphasisSpan>
    <EmphasisSpan color={Color.secondary30} size="large">{title}</EmphasisSpan>
  </Member>
);

const Value: React.FC<{src: string, title: string, descr: string}> = ({src, title, descr}) => (
  <ValueLayout>
    <ValueLogo><img src={src} /></ValueLogo>
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

const Section: React.FC<{title: string, background: string}> = ({ title, background, children }) => (
  <SectionLayout background={background}>
    <SectionTitle size="xx-large" color={Color.secondaryFFF}>{title}</SectionTitle>
    <RowFlex>
      {children}
    </RowFlex>
  </SectionLayout>
);

function App() {
  return (
    <Layout>
      <Header>
        <Headline size="xxx-large" color={Color.secondaryFFF}>M4C/DEV</Headline>
        <Headline size="x-large" color={Color.secondary20}>nice to meet you!</Headline>
      </Header>
      <Section title="THE DEVS" background={background1}>
        <MemberProfile src="peter.png" name="Peter" title="Head of Devs"/>
        <MemberProfile src="brian.png" name="Brian" title="Sr. Software Developer"/>
        <MemberProfile src="stewie.jpg" name="Stewie" title="Sr. Software Developer"/>
        <MemberProfile src="chris.jpg" name="Chris" title="Jr. Software Developer"/>
        <MemberProfile src="quagmire.png" name="Quagmire" title="QA"/>
      </Section>
      <Section title="THE STACK" background={background2}>     
        <StackLogo><img src="ionic.svg" /></StackLogo>
        <StackLogo><img src="react.svg" /></StackLogo>
        <StackLogo><img src="ts.svg" /></StackLogo>
        <StackLogo><img src="graphql.svg" /></StackLogo>
        <StackLogo><img src="postgraphile.svg" /></StackLogo>
        <StackLogo><img src="terraform.svg" /></StackLogo>
        <StackLogo><img src="aws.svg" /></StackLogo>
        <StackLogo><img src="circleci.svg" /></StackLogo>
      </Section>
      <Section title="OUR TEAM VALUES" background={background1}>
        <Value src="001-blocks.svg" title="High quality" descr="Aliquam lobortis vestibulum mi vel condimentum. Praesent eu mi lectus. Etiam sed nulla nec dui pellentesque auctor. Sed tempus, sem quis convallis ultricies, lectus erat posuere arcu, at vehicula libero dui fermentum nibh. Pellentesque scelerisque dui libero, a consectetur nulla vulputate in. Vestibulum laoreet rutrum vulputate. Etiam vel diam nec dolor ornare varius quis ac mi." />
        <Value src="002-team.svg" title="We are a team" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum vitae nunc in euismod. Aliquam facilisis quam a semper venenatis. In id mollis ipsum. Nunc vel pharetra lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis non turpis dui. Pellentesque auctor libero sit amet urna sollicitudin, ac maximus leo fermentum. Suspendisse potenti. Integer a ultricies tortor, sed imperdiet metus. Vivamus et ultrices arcu." />
        <Value src="004-talking.svg" title="Open communication" descr="Cras tincidunt egestas ex, at imperdiet massa rhoncus et. Etiam commodo nibh in urna pulvinar maximus. Maecenas iaculis ante orci, non commodo dui sagittis eget." />
        <Value src="005-big-family.svg" title="Purpose" descr="Proin quis fermentum odio, nec tincidunt sem. Sed eu sapien pulvinar, elementum purus vitae, vulputate mauris. Nulla in convallis ex, vitae maximus dui. Vivamus consequat ut nisl quis convallis. In hendrerit elementum diam, sit amet finibus massa eleifend ac. Pellentesque nec sem sodales, lobortis erat ut, tempor neque. Maecenas felis sem, ultrices eget eleifend in, ornare et odio. Donec ligula quam, ullamcorper quis laoreet imperdiet, maximus a tellus. Nunc enim justo, tincidunt sit amet libero id, fringilla blandit dolor." />
      </Section>
      <Section title="THE PRODUCT" background={background2}>
        <ProductImage><img src="b2c2.png" /></ProductImage>
        <ProductImage><img src="b2c1.png" /></ProductImage>
      </Section>
      <Section title="SOME NUMBERS" background={background1}>
        <Counter src="002-speak.svg" title="1234" descr="Messages sent" />
        <Counter src="003-video-call.svg" title="1234" descr="Videocall minutes" />
        <Counter src="001-pictures.svg" title="1234" descr="Pictures sent" />
      </Section>
    </Layout>
  );
}

const Layout = styled.div`
  font-family: "DINPro Bold", "Roboto Condensed", sans-serif;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Header = styled(ColumnFlex)`
  background: grey;
  min-height: 200px;
  background: linear-gradient(90deg, #1496BF 0%, #0169C2 100%);
  justify-content: center;
  span {
    align-self: center;
  }
`;

const SectionLayout = styled(ColumnFlex)<{background: string}>`
  background: ${p => p.background};
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 64px;
`;

const SectionTitle = styled(Headline)`
  font-family: 'Kanit', sans-serif;
  padding-bottom: 48px;
`;

const Member = styled(ColumnFlex)`
  margin: 16px;
`;

const ProductImage = styled.div`
  overflow: hidden;
  width: auto;
  display: flex;
  margin: 16px;

  @media (orientation: landscape) {
    height: 400px;
  }
  
  @media (orientation: portrait) {
    max-height: 400px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const ValueLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

const ValueText = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

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
  margin: 0 16px 16px 16px;

  img {
    width: 100%;
    height: auto;
  }
`;

const StackLogo = styled.div`
  overflow: hidden;
  width: 80px;
  height: 80px;
  display: flex;
  margin: 16px;
  img {
    width: 100%;
    height: auto;
  }
`;

const ValueLogo = styled(StackLogo)`
  margin-bottom: 16px;
`;

export default App;
