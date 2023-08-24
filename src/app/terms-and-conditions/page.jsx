import React from 'react';
import TermsAndConditions from './TermsAndConditions';
import { fetchTermsAndConditions } from 'botak/api/pages';

const TermsAndConditionsServer = async () => {
  const data = await fetchTermsAndConditions();
  return <TermsAndConditions data={data} />;
};

export default TermsAndConditionsServer;
