import React from 'react';
import ArticlePost from './ArticlePost';

const Post = (props) => {
  const { data } = props;
  return (
    <>
      {data?.length > 0 &&
        data?.map((item) => {
          return (
            <ArticlePost
              category={item?.categories_data}
              key={item?.id}
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
