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
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    if (!res.status === 404) {
      return null;
    }
  }
};

export const fetchMenuFooterById = async (id) => {
  const fetUrl = `${API_URL}wp/v2/menu-items?menus=${id}`;
  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    if (!res.status === 404) {
      return null;
    }
  }
};

export const fetchArchiveProduct = async () => {
  const fetUrl = `http://botakdev.printcart.com/wp-json/wc/v3/products?category=295`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_CONSUMER_KEY}:${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`
    )}`
  };
  const res = await fetch(fetUrl, {
    headers,
    method: 'GET'
  });

  const data = await res.json();

  return data;
};
