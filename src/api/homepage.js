const PAGE_ID = 12599;
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};

export const fetchHomePageHeader = async () => {
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
  const fetUrl = `${API_URL}wp/v2/menus`;
  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }

  return data;
};

export const fetchMenuFooterById = async (id) => {
  const fetUrl = `${API_URL}wp/v2/menu-items?menus=${id}`;
  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchArchiveProductId = async (id, page = 1, perPage = 12) => {
  const fetUrl = `${API_URL}wc/v3/products?category=${id}&page=${page}&per_page=${perPage}`;

  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });
  const data = await res.json();
  const totalProducts = res.headers.get('x-wp-total');
  const totalPages = res.headers.get('x-wp-totalpages');
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return { data, totalProducts, totalPages };
};
