import { Col, Container, Row } from 'react-bootstrap';
import CompanyInfo from './CompanyInfo';
import FooterMenu from './FooterMenu';
import MenuContact from './MenuContact';
import styles from './top.module.css';

const Top = (props) => {
  const { companyInfo, footerMenu, footerContact } = props;

  return (
    <div className={styles.footerTop}>
      <Container>
        <Row>
          <Col lg={4}>
            <CompanyInfo
              logoSrc={companyInfo?.logoSrc}
              introduce={companyInfo?.introduce}
              descripton={companyInfo?.descripton}
            />
          </Col>
          <Col lg={8}>
            <Row className={styles.footerTopRight}>
              {footerMenu?.length > 0 &&
                footerMenu.map((menu, index) => (
                  <Col lg={4} key={`footerMenu-${index}`}>
                    <FooterMenu menuItems={menu.menuItems} title={menu.title} />
                  </Col>
                ))}
              <Col lg={4}>
                <MenuContact
                  contacts={footerContact.menuItems}
                  title={footerContact.title}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Top;
