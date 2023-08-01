const PAGE_ID = 12599;
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};

export const fetchHomePageHeader = async () => {
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
export const fetcPrimaryMenu = async () => {
  const fetUrl = [
    `${API_URL}wp/v2/menu-items?menus=478&page=1`,
    `${API_URL}wp/v2/menu-items?menus=478&page=2`
  ];

  const [resOne, resTwo] = await Promise.all(
    fetUrl.map((url) => fetch(url, { headers, method: 'GET' }))
  );

  if (!resOne.ok || !resTwo.ok) {
    throw new Error('Failed to fetch API');
  }

  const [jsonOne, jsonTwo] = await Promise.all([resOne.json(), resTwo.json()]);

  return [...jsonOne, ...jsonTwo];
};
