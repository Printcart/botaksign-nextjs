const PAGE_ID = 12599;
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const PAGE_MENU = process.env.NEXT_PUBLIC_MENU_PAGE_NUMBER;

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
  const fetMenus = [];
  const pageMenu = 3;

  const getMenuByPage = async (page) => {
    const url = `${API_URL}pc/v2/menu-items?menus=478&page=${page}`;
    const response = await fetch(url, { headers, method: 'GET' });
    return response.json();
  };

  for (let index = 1; index <= pageMenu; index++) {
    fetMenus.push(getMenuByPage(index));
  }

  const data = await Promise.all(fetMenus).catch((error) => {
    console.error('Error:', error);
  });

  let menus = [];

  data.map((item) => {
    menus = menus.concat(item);
  });

  return menus;

  // const fetUrl = `${API_URL}pc/v2/menu-items?menus=478&page=1`;
  // const res = await fetch(fetUrl, { headers, method: 'GET' });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch API');
  // }
  // const data = await res.json();
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

  const fetchMenu =
    data?.length > 0
      ? data.map(async (menu) => {
          const { id, name } = menu;
          if (id === 55 || id === 56) {
            const child = await fetchMenuFooterById(id);
            return { id, name, children: child?.length > 0 ? child : [] };
          }
        })
      : [];

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

export const fetchSearch = async (params) => {
  const fetchUrl = `${API_URL}wc/v3/products?search=${params}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
