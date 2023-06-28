import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import ItemControl from './ItemControl';

function App() {
  return (
    <>
      <Header />
      <hr></hr>
      <Row><ItemControl /></Row>
    </>
  );
}

export default App;