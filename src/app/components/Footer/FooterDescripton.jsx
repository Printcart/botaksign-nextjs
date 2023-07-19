import styles from './footerDescripton.module.css';

const FooterDescripton = ({ descripton, year }) => {
  return (
    <div className={styles.footerDescripton}>
      <label className={styles.footerYear}>{year}</label>
      <label>{descripton}</label>
    </div>
  );
};

export default FooterDescripton;
