import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">가계부</h1>
        <Button variant="primary">예산 추가</Button>
        <Button variant="outline-primary">지출 추가</Button>
      </Stack>
      <div></div>
    </Container>
  );
}

export default App;
