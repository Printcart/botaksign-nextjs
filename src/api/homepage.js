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

export const fetchDataFooterList = async (id) => {
  console.log(id);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(`cmsmart:NOq8 n7uz Kbsk ugrS uqoo S913`)}`
  };

  const fetUrl = `https://botakdev.printcart.com/wp-json/wp/v2/menu-items?menus=${id}`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const dataList = await res.json();

  return dataList;
};
