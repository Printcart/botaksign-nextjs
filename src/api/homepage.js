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

export const fetchCareer = async () => {
  console.log("carrree");
  const fetchUrl = "https://botakdev.printcart.com/wp-json/wp/v2/pages/52202";
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  console.log('data', data);
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
