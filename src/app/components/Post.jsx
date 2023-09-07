import React from 'react';
import ArticlePost from './ArticlePost';

const Post = (props) => {
  const { data, dataCategories } = props;
  const categoryNamesMap = {};
  dataCategories.forEach((category) => {
    categoryNamesMap[category.id] = category.name;
  });
  return (
    <>
      {data?.length > 0 &&
        data?.map((item) => {
          const categoryName =
            categoryNamesMap[item?.categories[0]] || 'Uncategorized';
          return (
            <ArticlePost
              categoryName={categoryName}
              key={item?.id}
              link={item?.link}
              slug={item?.slug}
              title={item?.title?.rendered}
              date={item?.date}
              excerpt={item?.excerpt?.rendered}
              featuredMediaUrl={item?.featured_media_url}
              idItem={item?.id}
              author={item?.author_data?.name}
            />
          );
        })}
    </>
  );
};

export default Post;
