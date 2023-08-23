import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import { fetchPrivacyPolicy } from 'botak/api/privacyPolicyPage';

const PrivacyPolicyServer = async () => {
  const data = await fetchPrivacyPolicy();
  return <PrivacyPolicy data={data} />;
};

export default PrivacyPolicyServer;
