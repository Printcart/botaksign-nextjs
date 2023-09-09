'use client';
import { fetchBlogById } from 'botak/api/pages';
import CrumbsCategories from 'botak/app/components/CrumbsCategories';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { pageNumber, slug, dataCate, id, dataCategories, dataTitleBlogSidebar } =
    props;
  const { totalPages } = dataCate;
  const [dataCa, setDataCate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = {
        id,
        page: pageNumber,
        perPage: 4
      };
      const result = await fetchBlogById(queryParams);
      setDataCate(result);
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
    />
  );
};

export default PageNumber;
