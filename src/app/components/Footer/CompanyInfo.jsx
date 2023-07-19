import Image from 'next/image';
import styles from './companyInfo.module.css';

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

export default CompanyInfo;
