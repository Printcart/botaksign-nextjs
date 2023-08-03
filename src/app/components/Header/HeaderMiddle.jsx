'use client';
import { headerData } from 'botak/app/data/menus';
import { Col, Container, Form, InputGroup, Nav, Row } from 'react-bootstrap';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import FontIcon from '../FontIcon';
import Search from './Search';
import { useEffect, useState } from 'react';
import queryString from 'query-string';

const Logo = ({ headerData }) => {
  return (
    <div className="logowrapper">
      <div className="mainlogo">
        <Link href="/">
          <Image
            src={headerData?.logo?.src}
            width={230}
            height={80}
            alt={headerData?.logo?.title}
          />
        </Link>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="cartheadwrapper d-inline-block position-relative">
      <div className="cartwrapper d-flex align-items-center">
        <div className="iconcart text-success px-1 fs-2">
          <FontIcon
            prefix={headerData?.icon?.prefix}
            iconName={headerData?.icon?.iconName}
          />
        </div>
        <div className="showcat position-relative text-start px-1">
          <span
            className="textcart d-block fw-medium text-secondary px-1"
            style={{ fontSize: '14px' }}
          >
            <span>Your Cart</span>
          </span>
          <span className="pricewrapper d-inline-block">
            <span
              className="number text-start position-static bg-transparent text-secondary px-1 pe-2 text-uppercase"
              style={{ fontSize: '14px' }}
            >
              0 Item (s)
            </span>
            <span className="price d-inline-block">
              <span className="amount fs-6" style={{ color: '#21a65b' }}>
                <span className="curentprice" style={{ fontSize: '14px' }}>
                  SGD $0.00
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="statuscart"></div>
    </div>
  );
};
const HeaderTopMobile = () => {
  return (
    <Nav defaultActiveKey="/#" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/#" className={`text-muted px-1 ${styles.sizeheader}`}>
          Register |
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/#" className={`text-muted px-1 ${styles.sizeheader}`}>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
const HeaderMiddle = () => {
  const [filters, setFilters] = useState({});
  const [searchList, setSearchList] = useState([]);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
    )}`
  };

  useEffect(() => {
    const fetchSearchList = async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `https://botakdev.printcart.com//wp-json/wc/v3/products?${paramsString}`;
        const respose = await fetch(requestUrl, { headers, method: 'GET' });
        const responseJSON = await respose.json();
        setSearchList(responseJSON);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchSearchList();
  }, [filters]);
  const handleFilterChange = (newFilter) => {
    setFilters({
      search: newFilter.searchValue
    });
  };
  return (
    <Container className="position-relative">
      <Row className="align-items-center">
        <Col xs={3} lg={3} md={3} sm={12} className="logoheader">
          <Logo headerData={headerData} />
        </Col>
        <Col xs={6} lg={6} md={6} sm={9} className="search px-3">
          <Search onSubmit={handleFilterChange} />
          <div className={styles.wrapperSearch}>
            {searchList.length > 0 ? (
              searchList.map((items) => (
                <div key={items.id} className={styles.wrappItems}>
                  <div className={styles.imageSearch}>
                    <Image
                      src={items?.images[0].src}
                      width={50}
                      height={50}
                      alt="Image Product"
                    />
                  </div>
                  <div className={styles.contentSearch}>
                    <div className={styles.title}>{items.name}</div>
                    <div className={styles.badges}>
                      <span className={styles.outOfStock}>Out of stock</span>
                    </div>
                    <span className={styles.fromPrice}>Price: From {''}</span>
                    <span className={styles.priceSearch}>SGD $0.00</span>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.wrappItems}>
                <div className={styles.contentSearch}>
                  <div className={styles.title}> No Results</div>
                </div>
              </div>
            )}
          </div>
        </Col>
        <Col
          xs={3}
          lg={3}
          md={3}
          sm={3}
          className="cart float-end text-end"
          style={{ cursor: 'pointer' }}
        >
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderMiddle;

export const HeaderMiddleMobile = () => {
  return (
    <Container className="position-relative">
      <Row className="row">
        <Col xs={6} sm={6} className="logoheader">
          <Logo headerData={headerData} />
        </Col>
        <Col
          xs={6}
          sm={6}
          className="headerTopRight pt-2 d-flex justify-content-end"
          style={{ cursor: 'pointer' }}
        >
          <HeaderTopMobile />
        </Col>
      </Row>
    </Container>
  );
};
