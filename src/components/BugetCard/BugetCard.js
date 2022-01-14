import { Card } from "react-bootstrap";

export default function BugetCard({ name, amount, max }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <div>{name}</div>
          <div>
            {amount} / {max}
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
