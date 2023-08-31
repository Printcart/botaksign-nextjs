'use client';
import Sider from 'botak/app/components/Sidebar/page';
import { ArticlePost } from 'botak/app/posts/Posts';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Archives = (props) => {
  const { date, dataCategories, dataBlog } = props;
  console.log(date);
  return (
    <Container>
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3}>
          <Sider dataCategories={dataCategories} dataBlog={dataBlog?.dataPosts} />
        </Col>
        <Col lg={9}>
          {date?.dataPosts.length > 0 &&
            date?.dataPosts.map((item) => (
              <ArticlePost
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
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Archives;
