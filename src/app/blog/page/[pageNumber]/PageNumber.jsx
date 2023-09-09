'use client';
import { fetchBlog } from 'botak/api/pages';
import CrumbsPosts from 'botak/app/components/CrumbsPosts';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { dataBlog, dataCategories, pageNumber, dataTitleBlogSidebar } = props;
  const { totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = {
        page: pageNumber,
        perPage: 4
      };
      const result = await fetchBlog(queryParams);
      setPosts(result);
    };

    fetchData();
  }, [pageNumber]);

  return (
    <CrumbsPosts
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      posts={posts}
      totalPages={totalPages}
      currentPage={pageNumber}
    />
  );
};

export default PageNumber;
