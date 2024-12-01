import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg1 from "../assets/projects/project1.jpg";
import pg2 from "../assets/projects/project2.jpg";
import ce from "../assets/projects/ce.jpg";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg1}
              isBlog={false}
              title="Science Gallery Booking System"
              description="Assist building staff in better managing booking situations. Significantly enhancing productivity for over 15 team members. This system enhanced operational efficiency by enabling the Learning. Team staff to quickly add and update bookings, handle scheduling conflicts and centralize all tour details, improving overall system usability and reliability."
              ghLink="https://github.com/COMP90082-2024-SM1/SG-Koala"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg2}
              isBlog={false}
              title="Travel recording app"
              description="Combining map tracking, text entries, and photo uploads. Offers a simple and creative way for users to document and reminisce about their travels. To capture memorable moments and cherish precious travel memories."
              ghLink="https://github.com/YongLi-Qin/comp90018-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ce}
              isBlog={false}
              title="Exchange Rate Tracker"
              description="The Exchange Rate Tracker is a dynamic tool designed for real-time monitoring of currency exchange rates. It periodically checks rates based on a configurable interval and sends email alerts to users when rates fall below their specified thresholds. The system offers flexible scheduling and retry mechanisms, allowing users to define intervals and retry limits through environment variables. Robust error handling ensures reliability by logging HTTP request errors and preventing infinite retry loops. This tracker provides users with timely updates and seamless notifications for effective currency management."
              ghLink="https://github.com/YongLi-Qin/ExchangeRateTracker"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects