import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import styles from './ArticlePost.module.css';

const Title = (props) => {
  const { title, className, href } = props;
  return (
    <h3 className={styles[className]}>
      <Link href={`/blog/${href}`}>{title}</Link>
    </h3>
  );
};

const Information = (props) => {
  const { date, author } = props;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <div className={styles.entryWrap}>
      <span className={styles.date}>{formatDate(date)}</span>
      <span>
        BY:{' '}
        <Link href="" className={styles.author}>
          {author || ''}
        </Link>
      </span>
      <span>
        2 <span>MINUTE READ</span>
      </span>
      <span>{'' || 'No Comments'}</span>
    </div>
  );
};

const ReadMore = (props) => {
  const { excerpt, slug } = props;
  return (
    <Fragment>
      <div>
        <div
          className={styles.entryText}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        <div className={styles.readMoreLink}>
          <Link href={`/blog/${slug}`}>Read more</Link>
        </div>
      </div>
      <div className={styles.entryFooter}>
        <span>share: </span>
      </div>
    </Fragment>
  );
};

const ArticlePost = (props) => {
  const {
    id,
    title,
    slug,
    date,
    excerpt,
    category,
    featuredMediaUrl,
    idItem,
    author
  } = props;

  return (
    <article key={id} className={styles.entryContent}>
      <div className={styles.subContent}>
        <div className={styles.entryThumb}>
          <div className={styles.entryImage}>
            <Image
              width={300}
              height={300}
              alt="Image"
              src={
                featuredMediaUrl ||
                'https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2020/08/stickerprintonly_detail_ink.jpg'
              }
            />
          </div>
          <div className={styles.entryNumber}>
            <span>{idItem || ''}</span>
          </div>
        </div>
        <div className={styles.entry}>
          <div className={styles.entryCat}>
            {category?.length > 0 &&
              category?.map((item) => (
                <Link key={item?.id} href={`/category/${item?.slug}`}>
                  {item?.name || ''}
                </Link>
              ))}
          </div>
          <Title className="entryTitle" title={title} href={slug} />
          <Information date={date} author={author} />
          <ReadMore excerpt={excerpt} slug={slug} />
        </div>
      </div>
    </article>
  );
};

export default ArticlePost;
