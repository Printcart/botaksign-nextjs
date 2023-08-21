import { fetchArchiveProductId } from 'botak/api/homepage';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Products } from './Products/page';
import { useParams } from 'next/navigation';

export const LoadMore = () => {
  // const params = useParams();
  // const [beers, setBeers] = useState([]);
  // const [pageLoaded, setPageLoaded] = useState(Number(params.id)); // Ensure that params.id is parsed as a number
  // const { ref, inView } = useInView();

  // const loadMoreData = async () => {
  //   const newProducts = await fetchArchiveProductId(pageLoaded);
  //   if (newProducts.length > 0) {
  //     setBeers((prevBeers) => [...prevBeers, ...newProducts]);
  //     setPageLoaded(pageLoaded + 1); // Increment the page number for the next load
  //   }
  // };

  // useEffect(() => {
  //   if (inView) {
  //     loadMoreData();
  //   }
  // }, [inView]);
  return (
    <div>
      {/* <Products beers={beers} /> */}
      {/* <Spinner /> */}
    </div>
  );
};
