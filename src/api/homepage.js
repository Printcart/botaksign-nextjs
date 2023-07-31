const PAGE_ID = 12599;
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};

export const fetchHomePageHeader = async () => {
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
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
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
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

  const fetchMenu = data.map(async (menu) => {
    const { id, name } = menu;
    if (id === 55 || id === 56) {
      const child = await fetchMenuFooterById(id);
      return { id, name, children: child.length > 0 ? child : undefined };
    }
  });

  const menusWithIdAndName = await Promise.all(fetchMenu);
  return menusWithIdAndName;
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
