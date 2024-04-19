import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ProfileForm from "../components/ProfileForm";
// import {
//   getData,
//   addProfile,
//   updateProfile,
//   deleteProfile,
// } from "../dataService";
import { getData, saveData, updateData, deleteData } from "../dataService";
import { Card, Row, Container } from "react-bootstrap";
import CustomNavbar from "../components/NavBar";
import Footer from "../components/Footer";


console.log(getData())

// Import statements here

const AdminPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (profile) => {
    setSelectedProfile(profile);
    setShowModal(true);
  };

  const handleDelete = (profileId) => {
    deleteData(profileId);
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== profileId)
    );
  };

  const handleFormSubmit = (formData) => {
    if (selectedProfile) {
      updateData(selectedProfile.id, formData);
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === selectedProfile.id
            ? { ...profile, ...formData }
            : profile
        )
      );
    } else {
      const newProfile = { id: Date.now(), ...formData }; // Generate unique ID
      saveData(newProfile);
      setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
    }
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setShowModal(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      
      <CustomNavbar/>
    <div>
      <Container>
        <h1 className="white_color">Admin Panel</h1>
      </Container>
      <Container>
        <Button onClick={() => setShowModal(true)}>Add Profile</Button>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProfile ? "Edit Profile" : "Add Profile"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProfileForm
            onSubmit={handleFormSubmit}
            onCancel={handleCloseModal}
            profile={selectedProfile}
          />
        </Modal.Body>
      </Modal>
      <div>
        <Container>

          <h2 className="white_color">Profiles</h2>
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {profiles.map((profile) => (
              <Card className="transparent" key={profile.id} style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img variant="top" src={profile.profileImg} alt={profile.name} />
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>{profile.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleEdit(profile)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(profile.id)}
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AdminPanel;

