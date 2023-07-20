import { Menu, MenuButton, MenuItem, SubMenu } from '@szhsin/react-menu';
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
                <Menu
                  menuButton={
                    <Nav.Item>
                      <Nav.Link
                        href={`${items?.url}`}
                        className={`${styles.linkmenus} text-secondary-emphasis fw-semibold`}
                        style={{ fontSize: '14px' }}
                      >
                        {items?.title?.rendered}
                        {items.subMenu && (
                          <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                        )}
                      </Nav.Link>
                    </Nav.Item>
                  }
                >
                  {items.subMenu
                    ? items?.subMenu?.map((submenu) =>
                        submenu.subMenuEnd ? (
                          <SubMenu
                            label={`${submenu.title.rendered}`}
                            key={submenu.id}
                          >
                            {submenu?.subMenuEnd?.map((menuend) => (
                              <MenuItem key={menuend.id}>
                                {menuend?.title.rendered}
                              </MenuItem>
                            ))}
                          </SubMenu>
                        ) : (
                          <MenuItem key={submenu.id}>
                            {submenu.title.rendered}
                          </MenuItem>
                        )
                      )
                    : items?.subMenu?.map((submenu) => (
                        <MenuItem key={submenu.id}>{''}</MenuItem>
                      ))}
                </Menu>
              </React.Fragment>
            ))}
        </Nav>
      </Container>
    </div>
  );
};

export default HeaderMenus;
