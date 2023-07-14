// 'use client';
import { FetchData, FetchDataFooter, FetchDataHeader } from '../../utils';
import styles from './page.module.css';

export default async function Home() {
  const pageHeader = await FetchDataHeader();
  // const page = await FetchData();
  // const pageFooter = await FetchDataFooter();
  return (
    <>
      {pageHeader && <head dangerouslySetInnerHTML={{ __html: pageHeader }} />}
      {/* {page?.content?.rendered && (
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      )}
      {pageFooter && <footer dangerouslySetInnerHTML={{ __html: pageFooter }} />} */}
    </>
  );
}
