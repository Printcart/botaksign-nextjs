import { menus } from 'botak/app/constant';
import { Container, Nav } from 'react-bootstrap';
import FontIcon from '../../FontIcon';
import styles from './headermenu.module.css';

const HeaderMenus = () => {
  return (
    <div className="headerlist border-top p-0">
      <Container>
        <Nav>
          {menus &&
            menus.map((items) => (
              <Nav.Item key={items.id}>
                <Nav.Link
                  href={`${items?.nav}`}
                  className={`${styles.linkmenus} text-secondary-emphasis fw-semibold`}
                  style={{ fontSize: '14px' }}
                >
                  {items?.title}{' '}
                  {items?.subMenu && (
                    <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                  )}{' '}
                </Nav.Link>
              </Nav.Item>
            ))}
        </Nav>
      </Container>
    </div>
  );
};

export default HeaderMenus;
