import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import quotes from "./quotes.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuote: "",
      currentAuthor: "",
      currentColor: "#16a085",
    }

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote = () => {

    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    this.setState({
      currentQuote: quote.quote,
      currentAuthor: quote.author,
      currentColor: this.randomColor(),
    });
  }

  randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  componentDidMount() {
    this.handleNewQuote();
  }


  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center' id='quote-box' style={{
         height: "100vh", 
         color: this.state.currentColor, 
         backgroundColor: this.state.currentColor,
         transition: "all 1s ease",  }}>
        <Card className='text-center p-4' style={{ width: "35rem" }}>
          <Container>
            <Row className='mt-5 mb-4 px-5'>
              <Col>
                <Card.Title id="text" style={{
                  transition: "opacity 1s ease",
                }}><FontAwesomeIcon icon={faQuoteLeft} /> {this.state.currentQuote}</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col className='text-end'>
                <Card.Subtitle id="author">- {this.state.currentAuthor}</Card.Subtitle>
              </Col>
            </Row>
            <Row className='m-4'>
              <Col md={1} className='me-auto'>
                <a className='btn' id="tweet-quote" target="_top" 
                style={{ 
                  backgroundColor: this.state.currentColor,
                  transition: "all 1s ease", 
                }} href={"https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + this.state.currentQuote + '" ' + this.state.currentAuthor)}>
                  <FontAwesomeIcon icon={faTwitter} size='gl'/>
                </a>
              </Col>
              <Col md={4} className='ms-auto'>
                <Button id="new-quote" variant="light" style={{
                   backgroundColor: this.state.currentColor,
                   transition: "all 1s ease",  
                  }} onClick={this.handleNewQuote}>New Quote
                </Button>
              </Col>
            </Row>
          </Container>
        </Card>
        <a className='text-light my-2 text-decoration-none' target="_blank" href='https://github.com/JoelTing99'>by JoelTing</a>
      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
