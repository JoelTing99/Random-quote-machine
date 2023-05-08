import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Button, Container, Row, Col, Card} from "react-bootstrap";
import quotes from "./quotes.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      currentColor: "#16a085",
    }
  }

  render() {
    return (
      <div className='position-relative' id='quote-box' style={{height: "100vh", color: this.state.currentColor, backgroundColor: this.state.currentColor}}>
        <Card className='text-center position-absolute top-50 start-50 translate-middle' style={{width: "30rem"}}>
          <Container>
            <Row className='mt-5 mb-4 px-5'>
              <Col>
                <Card.Title id="text">" Life isn’t about getting and having, it’s about giving and being.</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col className='text-end'>
                <Card.Subtitle id="author">- Kevin Kruse</Card.Subtitle>
              </Col>
            </Row>
            <Row className='my-4'>
              <Col md={4} className='ms-auto'>
                <Button id="new-quote" style={{backgroundColor: this.state.currentColor}}>New Quote</Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
