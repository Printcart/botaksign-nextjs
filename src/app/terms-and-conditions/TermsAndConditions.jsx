'use client';
import React from 'react';

const TermsAndConditions = (props) => {
  const { data } = props;

  const markupHomePageHeader = {
    __html: data.content.rendered || ''
  };
  console.log(data);
  return (
    <div>
      <div dangerouslySetInnerHTML={markupHomePageHeader}></div>
    </div>
  );
};

export default TermsAndConditions;
