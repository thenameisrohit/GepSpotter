import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ProfileSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Form.Group
        controlId="formSearch"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Form.Label className="white_color" style={{ marginRight: "10px" }}>
          Search by
        </Form.Label>
        <Form.Control
          className="transparent"
          type="text"
          placeholder="Name or City/Country"
          value={searchTerm}
          onInput={handleChange}
          style={{ marginRight: "10px" }} // Add margin to input field
        />
        <Button
          className="transparent"
          variant="primary"
          type="submit"
          style={{ marginLeft: "10px" }} // Add margin to search button
        >
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ProfileSearch;
