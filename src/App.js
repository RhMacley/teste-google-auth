import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

import { Navbar, Card, ListGroup } from 'react-bootstrap'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const responseGoogle = response => {

    if (response) {
      setName(response.profileObj.name)
      setEmail(response.profileObj.email)
      setUrl(response.profileObj.imageUrl)
    } else {
      console.log("erro");
    }

  }

  return (
    <div className="App ">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="http://pngimg.com/uploads/google/google_PNG19630.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
      Google Authenticator
    </Navbar.Brand>
      </Navbar>
      {
        !name ? <h1>Olá, seja bem vindo, faça login na sua conta google abaixo:</h1> :
          <div>
            <Card style={{ width: '20rem' }} className="container d.flex justify-content-center mt-4">
              <Card.Img variant="top" src={url} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <ListGroup>
                  <ListGroup.Item active>Tecnologias e bibliotecas utilizadas: </ListGroup.Item>
                  <ListGroup.Item>ReactJs</ListGroup.Item>
                  <ListGroup.Item>React Google Login</ListGroup.Item>
                  <ListGroup.Item>React Bootstrap</ListGroup.Item>
                  <ListGroup.Item>Link do repositório do github: </ListGroup.Item>
                  <ListGroup.Item><a href="https://github.com/RhMacley/test-google-auth" rel="noreferrer" target="_blank">https://github.com/RhMacley/test-google-auth</a></ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
      }
      <GoogleLogin
        clientId="99400111307-1d1mvck4p3j7fi4gkadppafppgk9jnc5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="mt-4"
      />
    </div>
  );
}

export default App;
