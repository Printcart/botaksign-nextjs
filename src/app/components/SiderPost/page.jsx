'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Sider.module.css';

export const SearchBlog = (props) => {
  const { className } = props;
  const router = useRouter();
  const [resultSearch, setResultSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (resultSearch === '') {
      return alert('Please fill in the search...');
    }
    updateSearchParams(resultSearch.toLowerCase());
  };

  const updateSearchParams = (resultSearch) => {
    const searchParams = new URLSearchParams(router.query);
    if (resultSearch) {
      searchParams.set('search', resultSearch);
    } else {
      searchParams.delete('search');
    }
    const newPathname = `${searchParams.toString()}`;
    router.push(`/resultSearchBlog?${newPathname}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles[className]}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setResultSearch(e.target.value)}
      />
      <span>
        <button type="submit">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </span>
    </form>
  );
};

export const Title = (props) => {
  const { title, className, href } = props;
  return (
    <>
      {href && href ? (
        href && (
          <h3 className={styles[className]}>
            <Link href={`/posts/${href}`}>{title}</Link>
          </h3>
        )
      ) : (
        <h3 className={styles[className]}>{title}</h3>
      )}
    </>
  );
};

export const ContentSider = (props) => {
  const { className, items, renderItem } = props;
  return (
    <div className={styles[className]}>
      <ul>
        {items?.length > 0 &&
          items?.map((item) => <li key={item.id}>{renderItem(item)}</li>)}
      </ul>
    </div>
  );
};

export const Blogs = (props) => {
  const { title } = props;
  return (
    <>
      <Title title="RECENT POSTS" className="title" />
      <ContentSider
        className="titleSider"
        items={title}
        renderItem={(post) => <Link href={post?.slug}>{post?.title?.rendered}</Link>}
      />
    </>
  );
};

export const Archives = (props) => {
  const { date } = props;
  const formatDateArchives = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <>
      <Title title="ARCHIVES" className="title" />
      <ContentSider
        className="titleSider"
        items={date}
        renderItem={(dateItem) => {
          return (
            <Link href={`/posts/${dateItem?.id}`}>
              {formatDateArchives(dateItem?.date)}
            </Link>
          );
        }}
      />
    </>
  );
};

export const Categories = (props) => {
  const { dataCategories } = props;
  console.log(dataCategories);
  return (
    <>
      <Title title="CATEGORIES" className="title" />
      <ContentSider
        className="titleCate"
        items={dataCategories}
        renderItem={(category) => {
          return (
            <Link href={`/categories/${category?.slug}`}>{category?.name}</Link>
          );
        }}
      />
    </>
  );
};

export const Comments = () => {
  return (
    <>
      <Title title="RECENT COMMENTS" className="title" />
    </>
  );
};

const Sider = (props) => {
  const { dataBlog, dataCategories } = props;
  return (
    <>
      <SearchBlog className="lightSearch" />
      {dataBlog && <Blogs title={dataBlog} />}
      {<Comments />}
      {dataBlog && <Archives date={dataBlog} />}
      {dataCategories && <Categories dataCategories={dataCategories} />}
    </>
  );
};

export default Sider;
