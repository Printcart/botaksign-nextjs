'use client';
import { fetchBlog } from 'botak/api/pages';
import CrumbsArchives from 'botak/app/components/CrumbsArchives';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { dataTitleBlogSidebar, dataCategories, month, year, dataDate, pageNumber } =
    props;
  const { totalPages } = dataDate;
  const [archives, setArchives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, pageNumber, 4);
      setArchives(result);
      setHasPostsData(true);
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
