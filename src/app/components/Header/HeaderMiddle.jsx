'use client';
import { fetchSearch } from 'botak/api/homepage';
import { headerData } from 'botak/app/ContactUs.jsx/menus';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Col, Container, Nav, Row, Spinner } from 'react-bootstrap';
import FontIcon from '../FontIcon';
import Search from './Search';
import styles from './header.module.css';

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
  const [words, setWords] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsResultVisible(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const fetchSearchList = async () => {
      if (words.length > 2) {
        setIsLoading(true);
        const responseJSON = await fetchSearch(words);
        setSearchList(responseJSON);
        setIsResultVisible(true);
        setIsLoading(false);
      }
    };
    fetchSearchList();
  }, [words]);

  const handleChange = (e) => {
    setWords(e.target.value);
    setIsResultVisible(true);
  };
  const hanldeInputClick = () => {
    setIsResultVisible(true);
  };
  const hightlightMatchingText = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  return (
    <Container className="position-relative">
      <Row className="align-items-center">
        <Col xs={3} lg={3} md={3} sm={12} className="logoheader">
          <Logo headerData={headerData} />
        </Col>
        <Col xs={6} lg={6} md={6} sm={9} className="search px-3" ref={inputRef}>
          <Search
            onChange={handleChange}
            inputRef={inputRef}
            handleClick={hanldeInputClick}
            isLoading={isLoading}
          />

          {words.length > 2 && searchList.length > 0 && isResultVisible && (
            <div className={styles.wrapperSearch}>
              {searchList.map((item) => (
                <div key={item.id} className={styles.wrappItems}>
                  <div className={styles.imageSearch}>
                    <Image
                      src={item?.images[0]?.src}
                      width={50}
                      height={50}
                      alt="Image Product"
                    />
                  </div>
                  <div className={styles.contentSearch}>
                    <div
                      className={styles.title}
                      dangerouslySetInnerHTML={{
                        __html: hightlightMatchingText(`${item.name}`, words)
                      }}
                    ></div>
                    <div className={styles.badges}>
                      <span className={styles.outOfStock}>
                        {item?.stock_status === 'outofstock' ? 'Out of stock' : ''}
                      </span>
                    </div>
                    <span
                      className={styles.fromPrice}
                      dangerouslySetInnerHTML={{
                        __html: `Price: ${item.price_html} `
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {words.length > 2 && searchList.length === 0 && isResultVisible && (
            <div className={styles.wrapperSearch}>
              <div className={styles.wrappItems}>
                <div className={styles.contentSearch}>
                  <div className={styles.title}> No Results</div>
                </div>
              </div>
            </div>
          )}
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
