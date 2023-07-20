const API_URL = process.env.WORDPRESS_API_URL;

export const fetchHomePage = async () => {
  const headers = { 'Content-Type': 'application/json' };

  const homeUrl = `${API_URL}pc/v2/pages/12599`;
  // WPGraphQL Plugin must be enabled
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
