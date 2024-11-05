import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import StudentRecords from './components/StudentRecords';
import TeamBuilder from './components/TeamBuilder';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Physical Education Department</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/records">Student Records</Nav.Link>
          <Nav.Link href="/team-builder">Team Builder</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/records" element={<StudentRecords />} />
          <Route path="/team-builder" element={<TeamBuilder />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
