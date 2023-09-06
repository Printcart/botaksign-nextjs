'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Sidebar.module.css';

export const SearchBlog = (props) => {
  const { className } = props;
  const router = useRouter();
  const [resultSearch, setResultSearch] = useState('');

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (resultSearch === '') {
      return alert('Please fill in the search...');
    }
    updateSearchParams(resultSearch.toLowerCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };
  return (
    <div className={styles[className]}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setResultSearch(e.target.value)}
        value={resultSearch}
        onKeyDown={handleKeyDown}
      />
      <span>
        <button type="submit" onClick={handleSearch}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </span>
    </div>
  );
};

const Title = (props) => {
  const { title, className } = props;
  return <h3 className={styles[className]}>{title}</h3>;
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

const Blogs = (props) => {
  const { title } = props;
  return (
    <>
      <Title title="RECENT POSTS" className="title" />
      <ContentSider
        className="titleSider"
        items={title}
        renderItem={(dataItem) => (
          <Link href={`/blog/${dataItem?.slug}`}>{dataItem?.title?.rendered}</Link>
        )}
      />
    </>
  );
};

const Archives = (props) => {
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
        renderItem={(dataItem) => {
          const data = new Date(dataItem.date);
          return (
            <Link
              href={`/${data.getFullYear()}/${
                data.getMonth() < 10 ? '0' + data.getMonth() : data.getMonth()
              }`}
            >
              {formatDateArchives(dataItem?.date)}
            </Link>
          );
        }}
      />
    </>
  );
};

const Categories = (props) => {
  const { dataCategories } = props;
  return (
    <>
      <Title title="CATEGORIES" className="title" />
      <ContentSider
        className="titleCate"
        items={dataCategories}
        renderItem={(dataItem) => {
          return (
            <Link href={`/categories/${dataItem?.slug}`}>{dataItem?.name}</Link>
          );
        }}
      />
    </>
  );
};

const Comments = () => {
  return (
    <>
      <Title title="RECENT COMMENTS" className="title" />
    </>
  );
};

const Sidebar = (props) => {
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

export default Sidebar;
