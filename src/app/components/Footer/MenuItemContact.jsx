import FaIconExtend from '../FaIconExtend';
import Link from 'next/link';
import { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import styles from './menuItemContact.module.css';

const MenuItemContact = (props) => {
  const { subContacts, icon } = props;

  return (
    <ListGroup.Item className={styles.listItems}>
      {icon && <FaIconExtend lib={icon.lib} attr={icon.attr} />}
      {subContacts?.length > 0 &&
        subContacts.map((subContact, index) => (
          <Fragment key={`index${index}`}>
            {!subContact?.url && <p>{subContact.title}</p>}
            {subContact?.url && (
              <Link
                key={`MenuItemContact-${index}`}
                href={subContact.url}
                className={styles.linkContact}
              >
                {subContact.title}
              </Link>
            )}
          </Fragment>
        ))}
    </ListGroup.Item>
  );
};

export default MenuItemContact;
