import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

const Search = () => {
  return (
    <Col xs={6} className="search px-3 m-auto">
      <div className="searchform d-flex w-100 align-items-center">
        <Form className="w-100">
          <InputGroup
            size="lg"
            className="searchform w-100 d-flex align-items-center"
          >
            <div className="d-inline-block" style={{ width: '88%', height: '46px' }}>
              <Form.Control
                className=" h-100 rounded-start-pill ps-3 shadow-none lh-base m-0 bg-transparent fs-6"
                type="text"
                id="inputData"
                placeholder="Search"
              />
            </div>
            <InputGroup.Text
              type="submit"
              className="lh-base m-0 rounded-end-pill position-relative text-capitalize bg-transparent fs-6 px-1 text-secondary "
              style={{ width: '12%', height: '46px' }}
            >
              Search
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </div>
    </Col>
  );
};

export default Search;
