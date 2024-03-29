import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

var socials = [
  {
    key: '1',
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
    key: '2',
    logo: './logos/twitch.png',
    link: "https://www.twitch.tv/rcasttv",
    name: "Twitch"
  },
  {
    key: '5',
    logo: "./logos/facebook.png",
    link: "https://www.facebook.com/rcasttv",
    name: "Facebook" 
  },  
  {
    key: '4',
    logo: "./logos/twitter.png",
    link: "https://twitter.com/rcasttv",
    name: "Twitter" 
  },  
  {
    key: '6',
    logo: "./logos/dlive.png",
    link: "https://dlive.tv/RCastTV",
    name: "DLive" 
  },
  {
    key: '7',
    logo: "./logos/telegram.png",
    link: "https://t.me/+1yIWPCO7MbE4ZDUx",
    name: "Telegram" 
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
    <Row key={curr.key} className='container-social'>
      <a href={curr.link} target="_blank" rel="noreferrer">
      <Col className="colSocial" md={{span : 4, offset : 4}}>
        <Image className='socialLogos' src={curr.logo} alt="" />
        {"  "}
        <span className='social-text'>{curr.name}</span>
      </Col>
      </a>
    </Row>
  );
}

export default App;
