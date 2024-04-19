import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <Card style={{ width: "18rem", margin: "1rem" }} className="transparent">
      <Card.Img variant="top" src={profile.profileImg} alt={profile.name} />
      <Card.Body className="c_transparent">
        <Card.Title className="white_color">{profile.name}</Card.Title>
        <Card.Text>{profile.description}</Card.Text>
        <Button
          className="white_color c_transparent"
          variant="primary"
          onClick={handleProfileClick}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  );
};

export default ProfileCard;
