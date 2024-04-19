import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProfileDetails from "../components/ProfileDetails";
import NavBar from "../components/NavBar";
import Map from "../components/Map";
import Footer from "../components/Footer";

const ProfileDetailsPage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch profile data by ID from data.json
    const fetchData = async () => {
      try {
        const response = await fetch(`/data.json`);
        const data = await response.json();

        // Find the profile with the matching id in the fetched data
        const foundProfile = data.find(
          (profile) => profile.id === parseInt(id)
        );
        if (foundProfile) {
          setProfile(foundProfile);
        } else {
          console.error("Profile not found");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavBar />
      <Container>
        <h1 className="my-4 white_color">Profile Details</h1>
        <Row>
          <Col md={6}>
            {profile ? <ProfileDetails profile={profile} /> : <p>Loading...</p>}
          </Col>
          <Col md={6}>
            {profile && (
              <Map latitude={profile.latitude} longitude={profile.longitude} />
            )}
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default ProfileDetailsPage;
