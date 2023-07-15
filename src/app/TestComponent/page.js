'use client';
import { Button, Col, Dropdown, DropdownButton, Row, Stack } from 'react-bootstrap';

const TestComponent = () => {
  return (
    <>
      <Stack direction="horizontal" gap={3} className="p-2  justify-content-center">
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Light dropdown"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Dark dropdown"
          className="mt-2"
          data-bs-theme="dark"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
      </Stack>
      <Row>
        <Col>
          <Button variant="success">Success</Button>
        </Col>
        <Col>
          <Button variant="primary">Primary</Button>
        </Col>
        <Col>
          <Button variant="danger">Danger</Button>
        </Col>
      </Row>
    </>
  );
};

export default TestComponent;
