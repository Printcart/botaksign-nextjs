const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const ID_PAGE = process.env.NEXT_PUBLIC_ID_PAGE_CORPORATE_PARTNER;
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};

export const fetCorporatePartner = async (params) => {
  const fetchUrl = `${API_URL}wc/v3/products?search=${params}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
