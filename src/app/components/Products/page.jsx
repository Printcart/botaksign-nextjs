import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import styles from './product.module.css';

export const Products = (props) => {
  const { data } = props;

  return (
    <Row className={styles.product}>
      {data.length > 0 &&
        data.map((item) => <ItemProduct key={item.id} item={item} />)}
    </Row>
  );
};

const ItemProduct = (props) => {
  const { item } = props;
  return (
    <Col key={item.id} lg={4} md={4} xs={6} className={styles.productCol}>
      <Card className={styles.propductItem}>
        <Link href={`product/${item.slug}`}>
          <ImageProduct images={item.images} />
        </Link>
        <ContentProduct name={item.name} permalink={item?.permalink} />
      </Card>
    </Col>
  );
};

const ImageProduct = (props) => {
  const { images } = props;
  return (
    <Card.Img
      variant="top"
      src={
        images &&
        'https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2022/04/invitation_cards_v1.jpg'
      }
    />
  );
};

const ContentProduct = (props) => {
  const { name, permalink } = props;
  return (
    <Card.Body className={styles.contentItem}>
      <Link href={permalink}>
        <Card.Title className={styles.titleItem}>{name || ''}</Card.Title>
      </Link>
    </Card.Body>
  );
};
