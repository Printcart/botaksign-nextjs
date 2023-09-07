'use client';
import { fetchBlog } from 'botak/api/pages';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination } from '../../Archives';

const PageNumber = (props) => {
  const { dataTitleBlogSidebar, dataCategories, month, year, dataBlog, pageNumber } =
    props;
  const { dataPosts, totalPages, totalPosts } = dataBlog;
  const [currentPage, setCurrentPage] = useState(1);
  const [archives, setArchives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, pageNumber, 2);
      setArchives(result);
    };

    fetchData();
  }, [year, month, pageNumber]);

  return (
    <Container>
      {/* <BreadCrumb slug={slug} pageNumber={pageNumber} /> */}
      <Row className="">
        <Col lg={3} className="p-3">
          <Sidebar
            dataTitleBlogSidebar={dataTitleBlogSidebar}
            dataCategories={dataCategories}
          />
        </Col>
        <Col lg={9} className="px-3">
          <Post data={archives?.dataPosts} dataCategories={dataCategories} />
          <Pagination
            year={year}
            month={month}
            totalPages={totalPages}
            currentPage={pageNumber}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PageNumber;
