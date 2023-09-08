'use client';
import { fetchBlog } from 'botak/api/pages';
import CrumbsPosts from 'botak/app/components/CrumbsPosts';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { dataBlog, dataCategories, pageNumber, dataTitleBlogSidebar } = props;
  const { totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', '', '', pageNumber, 4);
      setPosts(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [pageNumber]);

  return (
    <CrumbsPosts
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      hasPostsData={hasPostsData}
      posts={posts}
      totalPages={totalPages}
      currentPage={pageNumber}
    />
  );
};

export default PageNumber;
