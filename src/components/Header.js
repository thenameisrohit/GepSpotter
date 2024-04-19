import React from "react";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header style={{ marginTop: "50px" }}>
      <Container>
        <h1 className="white_color">Welcome to Profile Explorer</h1>
        <p className="white_color">Explore profiles and their locations</p>
      </Container>
    </header>
  );
};

export default Header;
