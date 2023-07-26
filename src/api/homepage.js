const PAGE_ID = 12599;
const API_URL = process.env.WORDPRESS_API_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.WORDPRESS_API_USER}:${process.env.WORDPRESS_API_PASS}`
  )}`
};

export const fetchHomePageHeader = async () => {
  const API_URL = process.env.WORDPRESS_API_URL;
  const headers = { 'Content-Type': 'application/json' };

  const fetUrl = `${API_URL}pc/v2/vc-api/header?id=${PAGE_ID}`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
};

export const fetchHomePageFooter = async () => {
  const API_URL = process.env.WORDPRESS_API_URL;
  const headers = { 'Content-Type': 'application/json' };

  const fetUrl = `${API_URL}pc/v2/vc-api/footer`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
};

export const fetchHomePage = async () => {
  const headers = { 'Content-Type': 'application/json' };

  const fetUrl = `${API_URL}pc/v2/pages/${PAGE_ID}`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
};

export const fetcAssets = async () => {
  const headers = { 'Content-Type': 'application/json' };

  const fetUrl = `${API_URL}pc/v2/assets`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
};

export const fetchDataFooterTitle = async () => {
  const fetUrl = `${API_URL}/wp-json/wp/v2/menus`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const data = await res.json();

  return data;
};

export const fetchDataFooterListExplore = async () => {
  const fetUrl = `${API_URL}/wp-json/wp/v2/menu-items?menus=56`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const dataList = await res.json();

  return dataList;
};
export const fetchDataFooterListNeedHelp = async () => {
  const fetUrl = `${API_URL}/wp-json/wp/v2/menu-items?menus=55`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const dataList = await res.json();

  return dataList;
};
