import { debounce } from 'lodash';
import { Col, Form, InputGroup, Spinner } from 'react-bootstrap';
import styles from './header.module.css';

const Search = (props) => {
  const { onChange, handleClick, isLoading } = props;
  const handleSearch = debounce((e) => {
    onChange(e);
  }, 300);

  return (
    <div
      className="searchform d-flex w-100 align-items-center"
      style={{ height: '46px' }}
    >
      <Form className="w-100 h-100">
        <InputGroup size="lg" className="searchform w-100 align-items-center h-100">
          <Col xs={10} className="d-inline-block h-100 position-relative">
            {isLoading && (
              <Spinner
                animation="border"
                className="text-secondary position-absolute"
                style={{ top: '7px', right: '10px' }}
              />
            )}
            <Form.Control
              onClick={handleClick}
              onChange={handleSearch}
              className={`${styles.inputsearch} h-100 rounded-start-pill ps-3 shadow-none lh-base m-0 bg-transparent text-secondary`}
              type="text"
              id="inputData"
              placeholder="Search"
            />
          </Col>
          <Col xs={2} className="h-100">
            <InputGroup.Text
              type="submit"
              className="h-100 lh-base m-0 rounded-end-pill position-relative bg-transparent text-secondary justify-content-center"
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
