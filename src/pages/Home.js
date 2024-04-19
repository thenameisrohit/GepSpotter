import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";
import ProfileSearch from "../components/ProfileSearch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import VideoBackground from "../components/VideoBackground";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch profiles data from an API
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("data.json");
        setProfiles(response.data);
        setSearchResults(response.data); // Initialize search results with all profiles
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredResults = profiles.filter((profile) => {
      const nameMatch = profile.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const emailMatch = profile.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const locationMatch = profile.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const addressMatch = profile.address
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return nameMatch || emailMatch || locationMatch || addressMatch;
    });
    setSearchResults(filteredResults);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavBar />
      <Header />
      <Container>
        <Container>
          <ProfileSearch onSearch={handleSearch} />
        </Container>
        <Container style={{ marginTop: "50px" }}>
          <h1 className="my-4 white_color">Profiles</h1>
        </Container>
        <Row>
          {searchResults.map((profile) => (
            <Col sm={6} md={4} lg={3} key={profile.id}>
              <ProfileCard profile={profile} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
