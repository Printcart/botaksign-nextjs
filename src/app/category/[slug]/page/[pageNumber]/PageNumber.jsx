'use client';
import { fetchBlogById } from 'botak/api/pages';
import CrumbsCategories from 'botak/app/components/CrumbsCategories';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { pageNumber, slug, dataCate, id, dataCategories, dataTitleBlogSidebar } =
    props;
  const { totalPages } = dataCate;
  const [dataCa, setDataCate] = useState([]);
  const [hasPostsData, setHasPostsData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogById(id, pageNumber, 4);
      setDataCate(result);
      result?.data?.length > 0 && setHasPostsData(true);
    };

    fetchData();
  }, [id, pageNumber]);

  return (
    <CrumbsCategories
      slug={slug}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      dataCategories={dataCategories}
      posts={dataCa}
      currentPage={pageNumber}
      totalPages={totalPages}
      hasPostsData={hasPostsData}
    />
  );
};

export default PageNumber;
