import React from 'react';
import TermsAndConditions from './TermsAndConditions';
import { fetchTermsAndConditions } from 'botak/api/homepage';

const TermsAndConditionsServer = async () => {
  const data = await fetchTermsAndConditions();
  return (
    <div>
      <TermsAndConditions data={data} />
    </div>
  );
};

export default TermsAndConditionsServer;
