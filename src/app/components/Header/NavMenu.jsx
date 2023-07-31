'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlay } from '@fortawesome/free-solid-svg-icons';
import styles from './NavMenu.module.css';
import { Container, Nav } from 'react-bootstrap';
import FontIcon from '../FontIcon';

const decodeHTML = (text) => {
  const element = document.createElement('textarea');
  element.innerHTML = text;
  return element.value;
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
  return (
    <div className={styles.wrapSubTwo}>
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
  );
};

const NavMenu = ({ menuItems }) => {
  console.log(menuItems);
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
