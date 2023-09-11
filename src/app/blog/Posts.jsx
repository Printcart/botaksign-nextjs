'use client';
import { fetchBlog } from 'botak/api/pages';
import { useEffect, useState } from 'react';
import CrumbsPosts from '../components/CrumbsPosts';

const Posts = (props) => {
  const { dataBlog, dataCategories, dataTitleBlogSidebar } = props;
  const { totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const currentPage = 1;
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = {
        page: currentPage,
        perPage
      };
      const result = await fetchBlog(queryParams);
      setPosts(result);
    };

    fetchData();
  }, [currentPage]);

  return (
    <CrumbsPosts
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      posts={posts}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default Posts;
