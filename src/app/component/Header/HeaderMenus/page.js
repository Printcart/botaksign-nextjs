import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import FontIcon from '../../FontIcon';
import styles from './headermenu.module.css';

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
                {items.subMenu ? (
                  <Menu
                    menuClassName={styles.ulstyle}
                    menuButton={
                      <Nav.Item>
                        <Nav.Link
                          href={items?.url}
                          className={`${styles.linkmenus} text-secondary-emphasis fw-semibold d-flex `}
                          style={{ fontSize: '14px' }}
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
                          label={submenu.title.rendered}
                          key={submenu.id}
                          className={`${styles.submenu} fw-semibold`}
                        >
                          <div className={styles.ulstyle}>
                            {submenu?.subMenuEnd?.map((menuend) => (
                              <MenuItem
                                key={menuend.id}
                                className={styles.menuitems}
                              >
                                {menuend?.title.rendered}
                              </MenuItem>
                            ))}
                          </div>
                        </SubMenu>
                      ) : (
                        <MenuItem
                          key={submenu.id}
                          className={`${styles.submenu} fw-semibold`}
                        >
                          {submenu.title.rendered}
                        </MenuItem>
                      )
                    )}
                  </Menu>
                ) : (
                  <Nav.Item>
                    <Nav.Link
                      href={items?.url || '#'}
                      className={`${styles.linkmenus} text-secondary-emphasis fw-semibold`}
                      style={{ fontSize: '14px' }}
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
