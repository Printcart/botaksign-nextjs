'use client';
import { fetchBlog } from 'botak/api/pages';
import CrumbsArchives from 'botak/components/CrumbsArchives/page';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { dataTitleBlogSidebar, dataCategories, month, year, dataDate, pageNumber } =
    props;
  const { totalPages } = dataDate;
  const [archives, setArchives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = { year, month, page: pageNumber, perPage: 4 };
      const result = await fetchBlog(queryParams);
      setArchives(result);
    };

    fetchData();
  }, [year, month, pageNumber]);

  return (
    <CrumbsArchives
      month={month}
      year={year}
      posts={archives}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      totalPages={totalPages}
      currentPage={pageNumber}
    />
  );
};

export default PageNumber;
