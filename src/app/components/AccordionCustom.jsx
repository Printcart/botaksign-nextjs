import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './SignIn/signIn.module.css';

const AccordionCustom = (props) => {
  const { children, eventKey, header } = props;
  return (
    <Accordion.Item
      eventKey={eventKey}
      className={`${styles.accordionItem} ${styles.accordionItemAfter}`}
    >
      <Accordion.Header style={{ fontFamily: 'inherit' }}>{header}</Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionCustom;
