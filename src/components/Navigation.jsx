import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <Navbar style={{ textAlign: 'right' }}>
      <Container>
        <Navbar.Brand href="#home">
          Products
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="justify-content-end" href="/">Продукты</Nav.Link>
          <Nav.Link href="/about">Об этом</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
