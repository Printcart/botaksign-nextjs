'use client';
import { data } from 'botak/app/data';
import Bottom from './Bottom';
import Top from './Top';
import styles from './page.module.css';

const Footer = () => {
  const footerData = data;
  return (
    <div className={styles.siteFooter}>
      <Top
        companyInfo={footerData.companyInfo}
        footerMenu={footerData.footerMenu}
        footerContact={footerData.footerContact}
      />
      <Bottom copyright={footerData.copyright} />
    </div>
  );
};

export default Footer;
