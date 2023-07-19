import { Container, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import FontIcon from '../../FontIcon';
import styles from './headermenu.module.css';

const HeaderMenus = (props) => {
  const { menus } = props;
  return (
    <div className="headerlist border-top p-0">
      <Container>
        <Nav>
          {menus &&
            menus.map((items) => (
              <>
                <OverlayTrigger
                  trigger="hover"
                  key={items.id}
                  placement="bottom"
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Nav.Item>
                    <Nav.Link
                      href={`${items?.url}`}
                      className={`${styles.linkmenus} text-secondary-emphasis fw-semibold`}
                      style={{ fontSize: '14px' }}
                    >
                      {items?.title?.rendered}{' '}
                      {items?.subMenu && (
                        <FontIcon prefix="fas" iconName="chevron-down" size="xs" />
                      )}{' '}
                    </Nav.Link>
                  </Nav.Item>
                </OverlayTrigger>
              </>
            ))}
        </Nav>
      </Container>
    </div>
  );
};

export default HeaderMenus;
