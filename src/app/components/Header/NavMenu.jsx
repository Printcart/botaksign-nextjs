'use client';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerData } from 'botak/app/data/menus';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import FontIcon from '../FontIcon';
import { Search } from './HeaderMiddle';
import styles from './header.module.css';

const decodeHTML = (text) => {
  if (typeof window !== 'undefined') {
    const element = document.createElement('textarea');
    element.innerHTML = text;
    return element.value;
  }
};
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
        <Col sm={7}>
          <Search />
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
              {decodeHTML(subOne.title.rendered)}
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
              {decodeHTML(subOne.title.rendered)}
            </Link>
          </div>
          {subOne.children.map((subTwo) => (
            <div key={subTwo.id} className={styles.titleSubTwo}>
              <Link prefetch={false} href={subTwo.url}>
                {decodeHTML(subTwo.title.rendered)}
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
              {decodeHTML(subTwo.title.rendered)}
            </Link>
          </div>
          {subTwo.children.map((subThree) => (
            <div key={subThree.id} className={styles.titleSubTwo}>
              <Link prefetch={false} href={subThree.url}>
                {decodeHTML(subThree.title.rendered)}
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
