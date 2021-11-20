import React from "react";

import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function VideoLibraryItem({
  title,
  eventKey,
  imageSrc,
  onClick,
}: {
  title: string;
  eventKey: string;
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <Card className="movie-card">
      <Accordion.Toggle as={Card.Header} eventKey={eventKey} className="movie-header">
        <p className="movie-title">{title}</p>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body className="movie-body">
          <div className="movie-info">
            <div className="movie-photo">
              <img className="cursor-pointer" onClick={onClick} src={imageSrc} />
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
