'use client';
import { fetchCategoriesId } from 'botak/api/pages';
import CrumbsCategories from 'botak/components/CrumbsCategories';
import { useEffect, useState } from 'react';

const PageNumber = (props) => {
  const { pageNumber, slug, dataCate, id, dataCategories, dataTitleBlogSidebar } =
    props;
  const { totalPages } = dataCate;
  const [dataCa, setDataCate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryParamsId = {
        id,
        page: pageNumber,
        perPage: 4
      };
      const result = await fetchCategoriesId(queryParamsId);
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
