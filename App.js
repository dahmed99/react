import React, { useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';

function App() {
  const [formData, setFormData] = useState({
    platform: '',
    repoUrl: '',
    branch: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://test.com/1', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Form data sent successfully!');
      } else {
        console.error('Failed to send form data.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>PTSRE Observability Automation</Navbar.Brand>
      </Navbar>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Platform</Form.Label>
          <Form.Control
            type="text"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Repo URL</Form.Label>
          <Form.Control
            type="text"
            name="repoUrl"
            value={formData.repoUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;