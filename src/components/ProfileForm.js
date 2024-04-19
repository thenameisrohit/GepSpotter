import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ProfileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    interests: "",
    image: null, // Add image property to formData state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      interests: "",
      image: null, // Reset image state after submission
    });
  };

  return (
    <Form className="transparent" onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label style={{ color: "black" }}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label style={{ color: "black" }}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label style={{ color: "black" }}>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label style={{ color: "black" }}>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formInterests">
        <Form.Label style={{ color: "black" }}>Interests</Form.Label>
        <Form.Control
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label style={{ color: "black" }}>Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProfileForm;
