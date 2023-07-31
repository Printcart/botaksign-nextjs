'use client';
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { headerData } from 'botak/app/data/menus';
import React, { useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import FontIcon from '../FontIcon';
import { Search } from './HeaderMiddle';
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

const HeaderMenus = (props) => {
  const { menus, dataMenu } = props;
  console.log(dataMenu);
  return (
    <div className="headerlist border-top p-0">
      <Container>
        <Nav>
          {menus &&
            menus.map((items) => (
              <React.Fragment key={items.id}>
                {items.subMenu ? (
                  <Menu
                    menuClassName={styles.ulstyle}
                    menuButton={
                      <Nav.Item>
                        <Nav.Link
                          href={items?.url}
                          className={`${styles.linkmenus} text-secondary-emphasis fw-bold d-flex `}
                          style={{
                            fontSize: '14px',
                            paddingTop: '14px',
                            paddingBottom: '15px'
                          }}
                        >
                          {items?.title?.rendered}
                          <div className="ps-1">
                            <FontIcon
                              prefix="fas"
                              iconName="chevron-down"
                              size="xs"
                            />
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    }
                  >
                    {items?.subMenu?.map((submenu) =>
                      submenu.subMenuEnd ? (
                        <SubMenu
                          menuClassName={styles.megamenus}
                          label={submenu.title.rendered}
                          key={submenu.id}
                          className={`${styles.submenuend}`}
                        >
                          <div
                            className={`${styles.menuparent} fs-5 fw-medium py-2  mb-2`}
                          >
                            {submenu?.subMenuEnd?.parent}
                          </div>
                          {submenu?.subMenuEnd?.menus?.map((menuend) => (
                            <MenuItem key={menuend.id} className={styles.menuitems}>
                              {menuend?.title.rendered}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ) : (
                        <MenuItem key={submenu.id} className={`${styles.submenu}`}>
                          {submenu.title.rendered}
                        </MenuItem>
                      )
                    )}
                  </Menu>
                ) : (
                  <Nav.Item className={styles.linksingle}>
                    <Nav.Link
                      href={items?.url || '#'}
                      className="text-secondary-emphasis fw-bold"
                      style={{
                        fontSize: '14px',
                        paddingTop: '14px',
                        paddingBottom: '15px'
                      }}
                    >
                      {items?.title?.rendered}
                      {items.subMenu && (
                        <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                      )}
                    </Nav.Link>
                  </Nav.Item>
                )}
              </React.Fragment>
            ))}
        </Nav>
      </Container>
    </div>
  );
};

export default HeaderMenus;
