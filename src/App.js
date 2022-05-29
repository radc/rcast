import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

var socials = [
  {
    key: '1',
    logo: './logos/twitch.png',
    link: "https://www.twitch.tv/rcasttv",
    name: "Twitch"
  },
  {
    key: '2',
    logo: "./logos/youtube.png",
    link: "https://www.youtube.com/channel/UCPuFoC6ju6QXGvuT4dCHxYg",
    name: "YouTube"  
  },
  {
    key: '3',
    logo: "./logos/instagram.png",
    link: "https://instagram.com/rcasttv",
    name: "Instagram" 
  },
  {
    key: '4',
    logo: "./logos/twitter.png",
    link: "https://twitter.com/rcasttv",
    name: "Twitter" 
  },
  {
    key: '5',
    logo: "./logos/facebook.png",
    link: "https://www.facebook.com/rcasttv",
    name: "Facebook" 
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Container  className="justify-content-md-center colorRed">
        {socials.map((curr) => CustomisedRow(curr))}
        </Container>
      </header>
    </div>
  );
}

// 

function CustomisedRow(curr) {
  return (
    <Row key={curr.key}>
      <a href={curr.link} target="_blank">
      <Col className="colSocial" md={{span : 4, offset : 4}}>
        <Image className='socialLogos' src={curr.logo} alt="" />
        {"  "}
        {curr.name}
      </Col>
      </a>
    </Row>
  );
}

export default App;
