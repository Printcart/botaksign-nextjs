import React from 'react';
import { footerLinks } from '../../constant';
import { Container, Form } from 'react-bootstrap';
import styles from './footer.module.css';

const FooterBottom = () => {
  return (
    <div className={styles.footerBotom}>
      <Container className="container d-flex justify-content-end">
        {footerLinks.map((item, index) => {
          return (
            <Form.Text key={`index${index}`} className={styles.copyrightFooter}>
              {item.copyright}
            </Form.Text>
          );
        })}
      </Container>
    </div>
  );
};

export default FooterBottom;
