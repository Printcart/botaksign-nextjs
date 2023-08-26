const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const ID_PAGE_PRIVACYPOLICY = process.env.NEXT_PUBLIC_ID_PAGE_PRIVACYPOLICY;
const ID_PAGE_TERMS_AND_CODITIONS = process.env.NEXT_PUBLIC_ID_PAGE_TERMS_AND_CODITIONS;
const ID_PAGE_CAREERS = process.env.NEXT_PUBLIC_ID_PAGE_CAREERS;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};


export const fetchPrivacyPolicy = async () => {
  const fetchUrl = `${API_URL}pc/v2/pages/${ID_PAGE_PRIVACYPOLICY}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchTermsAndConditions = async () => {
  const fetchUrl = `${API_URL}pc/v2/pages/${ID_PAGE_TERMS_AND_CODITIONS}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchCareer = async () => {
  const fetchUrl = `${API_URL}pc/v2/pages/${ID_PAGE_CAREERS}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
