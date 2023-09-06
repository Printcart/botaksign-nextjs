import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;

  const router = useRouter();

  const goToPage = (page) => {
    const searchParams = new URLSearchParams(window.location.search);
    setCurrentPage(page);
    searchParams.set('page', page);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <>
      {totalPages > 0 && (
        <nav className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => goToPage(currentPage - 1)}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
              Newer Articles
            </button>
          )}
          {currentPage < totalPages && (
            <button onClick={() => goToPage(currentPage + 1)}>
              Older Articles
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </button>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
