'use client';
import {
  fetchDataFooterListExplore,
  fetchDataFooterListNeedHelp
} from 'botak/api/homepage';
import { data } from 'botak/app/data/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import FaIconExtend from '../FaIconExtend';
import styles from './page.module.css';

const Footer = ({ dataFooter }) => {
  const footerData = data;
  return (
    <div className={styles.siteFooter}>
      <Top
        companyInfo={footerData.companyInfo}
        footerMenu={dataFooter}
        footerContact={footerData.footerContact}
      />
      <Bottom copyright={footerData.copyright} />
    </div>
  );
};

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
              {footerMenu.dataTitle?.length > 0 &&
                footerMenu.dataTitle.map((menu, index) =>
                  menu.id === 55 || menu.id === 56 ? (
                    <Col lg={4} key={`footerMenu-${index}`}>
                      <FooterMenu menuItems={menu.menuItems} title={menu.name} />
                    </Col>
                  ) : null
                )}
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

const FooterMenu = (props) => {
  const { menuItems, title } = props;
  const [footerMenuData, setFooterMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await fetchDataFooterListExplore();
        setFooterMenuData(dataList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <MenuTitle title={title} />
      {menuItems?.length > 0 &&
        menuItems.map((item, index) => (
          <MenuItem key={`MenuItem-${index}`} label={item.title} url={item.url} />
        ))}
    </>
  );
};

const MenuItem = (props) => {
  const { label, url } = props;

  return (
    <ListGroup.Item className={styles.listItems}>
      <Link href={url} className={styles.footerList}>
        {label}
      </Link>
    </ListGroup.Item>
  );
};

const CompanyInfo = (props) => {
  const { logoSrc, introduce, descripton } = props;
  return (
    <div className={styles.footerCompanyInfo}>
      {logoSrc && (
        <Image
          width={157}
          height={56}
          alt="Logo site"
          src={logoSrc}
          className={styles.footerImage}
        />
      )}
      <div className={styles.footerDescripton}>
        <p>{introduce}</p>
        <p>{descripton}</p>
      </div>
    </div>
  );
};

const MenuTitle = (props) => {
  const { title } = props;
  return <div className={styles.footerMenuTitle}>{title}</div>;
};

const MenuItemContact = (props) => {
  const { subContacts, icon } = props;

  return (
    <ListGroup.Item className={styles.listItems}>
      {icon && (
        <FaIconExtend lib={icon.lib} attr={icon.attr} hasCircle={icon.hasCircle} />
      )}
      {subContacts?.length > 0 &&
        subContacts.map((subContact, index) => (
          <Fragment key={`SubContact-${index}`}>
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

const MenuContact = (props) => {
  const { title, contacts } = props;

  return (
    <>
      <MenuTitle title={title} />
      {contacts?.length > 0 &&
        contacts.map((contact, index) => (
          <MenuItemContact
            key={`MenuContact-${index}`}
            subContacts={contact.subMenuItems}
            icon={contact.icon}
          />
        ))}
    </>
  );
};

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

export default Footer;
