import React from 'react';

const FooterDescripton = ({ item, index }) => {
  return (
    <>
      <div key={`footer${index}`} className="pe-5">
        <p className=" footer-descripton">{item?.year}</p>
        <p className="footer-descripton">{item?.descripton}</p>
      </div>
    </>
  );
};

export default FooterDescripton;
