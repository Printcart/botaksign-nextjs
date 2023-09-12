'use client';
import { fetchCategoriesId } from 'botak/api/pages';
import CrumbsCategories from 'botak/components/CrumbsCategories';
import { useEffect, useState } from 'react';

const Categories = (props) => {
  const { dataCate, id, dataCategories, slug, dataTitleBlogSidebar } = props;
  const { data, totalPages } = dataCate;
  const [posts, setPosts] = useState(data);
  const currentPage = 1;
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const queryParamsId = {
        id,
        page: currentPage,
        perPage
      };
      const result = await fetchCategoriesId(queryParamsId);
      setPosts(result);
    };

    fetchData();
  }, [id, currentPage]);

  return (
    <CrumbsCategories
      slug={slug}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      dataCategories={dataCategories}
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default Categories;
