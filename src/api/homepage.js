const PAGE_ID = 12599;
const API_URL = process.env.WORDPRESS_API_URL;

export const fetchHomePageHeader = async () => {
  const API_URL = process.env.WORDPRESS_API_URL;
  const headers = { 'Content-Type': 'application/json' };

  const homeUrl = `${API_URL}pc/v2/vc-api/header?id=${PAGE_ID}`;

  const res = await fetch(homeUrl, {
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

  const homeUrl = `${API_URL}pc/v2/vc-api/footer`;

  const res = await fetch(homeUrl, {
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

  const homeUrl = `${API_URL}pc/v2/pages/${PAGE_ID}`;

  const res = await fetch(homeUrl, {
    headers,
    method: 'GET'
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json;
};
