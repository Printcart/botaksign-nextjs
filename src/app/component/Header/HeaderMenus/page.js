import React from 'react';
import { Container, ListGroup, Nav } from 'react-bootstrap';
import FontIcon from '../../FontIcon';
import styles from './headermenu.module.css';
import Example from 'botak/app/menu';
import { Menu, MenuButton, MenuItem, SubMenu } from '@szhsin/react-menu';

const HeaderMenus = (props) => {
  const { menus } = props;
  console.log(menus);
  return (
    <div className="headerlist border-top p-0">
      <Container>
        <Nav>
          {menus &&
            menus.map((items) => (
              <React.Fragment key={items.id}>
                <Menu
                  menuButton={
                    <Nav.Item>
                      <Nav.Link
                        href={`${items?.url}`}
                        className={`${styles.linkmenus} text-secondary-emphasis fw-semibold`}
                        style={{ fontSize: '14px' }}
                      >
                        {items?.title?.rendered}
                        {items?.subMenu && (
                          <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                        )}
                      </Nav.Link>
                    </Nav.Item>
                  }
                >
                  {items?.subMenu?.map((submenu) => (
                    <SubMenu label={`${submenu.title.rendered}`} key={submenu.id}>
                      {submenu?.subMenuEnd?.map((menuend) => (
                        <MenuItem key={menuend.id}>
                          {menuend?.title.rendered}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </Menu>
                {/* <Nav.Item>
                  <Nav.Link
                    href={`${items?.url}`}
                    className={`${styles.linkmenus} text-secondary-emphasis fw-semibold`}
                    style={{ fontSize: '14px' }}
                  >
                    {items?.title?.rendered}{' '}
                    {items?.subMenu && (
                      <>
                        <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                        <ListGroup as="ul">
                          {items?.subMenu.map((submenu) => (
                            <ListGroup.Item key={submenu.id} as="li">
                              {submenu.title.rendered}
                              {submenu.subMenuEnd && (
                                <div className="float-end">
                                  <FontIcon
                                    prefix="fas"
                                    iconName="caret-right"
                                    size="xs"
                                  />
                                </div>
                              )}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </>
                    )}{' '}
                  </Nav.Link>
                </Nav.Item> */}
              </React.Fragment>
            ))}
        </Nav>
        <Example />
      </Container>
    </div>
  );
};

export default HeaderMenus;
