import React from "react";
import { Card } from "react-bootstrap";

const ProfileDetails = ({ profile }) => {
  return (
    <Card className="transparent" style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={profile.profileImg} alt={profile.name} />
      <Card.Body>
        <Card.Title>{profile.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {profile.email}
        </Card.Text>
        <Card.Text>
          <strong>Phone:</strong> {profile.phone}
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> {profile.address}
        </Card.Text>
        <Card.Text>
          <strong>Location:</strong> {profile.location}
        </Card.Text>
        <Card.Text>
          <strong>Interests:</strong> {profile.interests.join(", ")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileDetails;
