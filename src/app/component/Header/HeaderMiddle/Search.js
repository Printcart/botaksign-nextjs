import { Col, Form, InputGroup } from 'react-bootstrap';

const Search = () => {
  return (
    <div className="searchform d-flex w-100 align-items-center">
      <Form className="w-100">
        <InputGroup size="lg" className="searchform w-100 d-flex align-items-center">
          <Col xs={10} className="d-inline-block" style={{ height: '46px' }}>
            <Form.Control
              className="h-100 rounded-start-pill ps-3 shadow-none lh-base m-0 bg-transparent fs-6"
              type="text"
              id="inputData"
              placeholder="Search"
            />
          </Col>
          <Col xs={2}>
            <InputGroup.Text
              type="submit"
              className="lh-base m-0 rounded-end-pill position-relative text-capitalize bg-transparent fs-6 text-secondary "
              style={{ height: '46px' }}
            >
              Search
            </InputGroup.Text>
          </Col>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Search;
