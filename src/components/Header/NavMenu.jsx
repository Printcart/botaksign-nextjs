'use client';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchSearch } from 'botak/api/homepage';
import { headerData } from 'botak/app/data/menus';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import FontIcon from '../FontIcon';
import Search from './Search';
import styles from './header.module.css';

const CartMobile = () => {
  return (
    <div className="cartheadwrapper d-inline-block position-relative">
      <div className="cartwrapper d-flex align-items-center">
        <div className="iconcart text-success px-1 fs-2">
          <FontIcon
            prefix={headerData?.icon?.prefix}
            iconName={headerData?.icon?.iconName}
          />
        </div>
      </div>
      <div className="statuscart"></div>
    </div>
  );
};
export const MenusMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col sm={2}>
          <Button
            className="d-flex text-secondary align-items-center bg-transparent border-0"
            onClick={handleOpenMenu}
          >
            <div className="fs-5 px-2">
              {isOpen === false ? (
                <FontIcon prefix="fa" iconName="bars" />
              ) : (
                <FontIcon prefix="fa" iconName="xmark" />
              )}
            </div>
            MENU
          </Button>
        </Col>
        <Col sm={7} ref={inputRef}>
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
        <Col sm={3} className="float-end text-end">
          <CartMobile />
        </Col>
        <div></div>
      </Row>
    </Container>
  );
};
const SubMenuOne = ({ item }) => {
  return (
    <div className={styles.wrapSubOne}>
      {item.children.map((subOne) => (
        <div key={subOne.id} className={styles.itemSubOne}>
          <div className={styles.titleSubOne}>
            <Link prefetch={false} href={subOne.url}>
              <div dangerouslySetInnerHTML={{ __html: subOne.title.rendered }} />
              {subOne?.children?.length > 0 && <FontAwesomeIcon icon={faPlay} />}
            </Link>
          </div>
          {subOne?.children?.length > 0 && <SubMenuTwo subOne={subOne} />}
        </div>
      ))}
    </div>
  );
};

const SubMenuTwo = ({ subOne }) => {
  // check sub three
  const four =
    subOne?.children?.length > 0 &&
    subOne.children.filter((item) => item.children.length > 0);

  return (
    <div className={styles.wrapSubTwo}>
      {four?.length > 0 ? (
        <SubMenuThree subOne={subOne} />
      ) : (
        <div>
          <div className={styles.titleMenu}>
            <Link prefetch={false} href={subOne.url}>
              <div dangerouslySetInnerHTML={{ __html: subOne.title.rendered }} />
            </Link>
          </div>
          {subOne.children.map((subTwo) => (
            <div key={subTwo.id} className={styles.titleSubTwo}>
              <Link prefetch={false} href={subTwo.url}>
                <div dangerouslySetInnerHTML={{ __html: subTwo.title.rendered }} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SubMenuThree = ({ subOne }) => {
  return (
    <div className={styles.wrapSubThree}>
      {subOne.children.map((subTwo) => (
        <div key={subTwo.id} className={styles.subThree}>
          <div className={styles.titleMenu}>
            <Link prefetch={false} href={subTwo.url}>
              <div dangerouslySetInnerHTML={{ __html: subTwo.title.rendered }} />
            </Link>
          </div>
          {subTwo.children.map((subThree) => (
            <div key={subThree.id} className={styles.titleSubTwo}>
              <Link prefetch={false} href={subThree.url}>
                <div dangerouslySetInnerHTML={{ __html: subThree.title.rendered }} />
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const NavMenu = ({ menuItems }) => {
  return (
    <div className={`${styles.main} border-top p-0`}>
      <Container>
        <Nav>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.wrapMenu}>
              <div className={styles.titleMega}>
                <Link prefetch={false} href={item.url}>
                  {item.title.rendered}
                  {item?.children?.length > 0 && (
                    <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                  )}
                </Link>
              </div>
              {item?.children?.length > 0 && <SubMenuOne item={item} />}
            </div>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default NavMenu;
