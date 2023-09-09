'use client';
import { fetchBlog } from 'botak/api/pages';
import CrumbsArchives from 'botak/app/components/CrumbsArchives';
import { useEffect, useState } from 'react';

const Archives = (props) => {
  const { dataDate, dataCategories, month, year, dataTitleBlogSidebar } = props;
  const { dataPosts, totalPages } = dataDate;
  const [posts, setPosts] = useState(dataPosts);
  const currentPage = 1;
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = { year, month, page: currentPage, perPage };
      const result = await fetchBlog(queryParams);
      setPosts(result);
    };

    fetchData();
  }, [year, month, currentPage]);

  return (
    <CrumbsArchives
      month={month}
      year={year}
      posts={posts}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default Archives;
