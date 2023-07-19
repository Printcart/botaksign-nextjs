import styles from './menuTitle.module.css';
const MenuTitle = (props) => {
  const { title } = props;
  return <div className={styles.title}>{title}</div>;
};

export default MenuTitle;
