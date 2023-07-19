const { Container, Row, Col } = require('react-bootstrap');
import styles from './Botom.module.css';
const Bottom = (props) => {
  const { copyright = '' } = props;

  if (!copyright) return <></>;

  return (
    <div className={styles.footerBottom}>
      <Container>
        <Row>
          <Col lg={12}>
            <p className={styles.copyrightFooter}>{copyright}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bottom;
