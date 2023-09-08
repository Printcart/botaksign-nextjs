const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};

export const fetchBlogSidebar = async () => {
  let fetchUrl = `${API_URL}pc/v2/posts`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();

  if (data.errors) {
    throw new Error('Failed to fetch API');
  }

  return data;
};

export const fetchBlog = async (search, year, month, page = 1, perPage = 4) => {
  let fetchUrl = `${API_URL}pc/v2/posts?page=${page}&per_page=${perPage}`;
  if (search) {
    fetchUrl += `&search=${search}`;
  } else if (year && month) {
    fetchUrl += `&before=${year}-${month
      .toString()
      .padStart(2, '0')}-01T00:00:00&after=${year}-${(month - 1)
      .toString()
      .padStart(2, '0')}-01T00:00:00`;
  }

  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const dataPosts = await res.json();

  if (dataPosts.errors) {
    throw new Error('Failed to fetch API');
  }
  const totalPosts = res.headers.get('X-WP-Total');
  const totalPages = res.headers.get('X-WP-TotalPages');

  return { dataPosts, totalPosts, totalPages };
};

export const fetchBlogRelated = async (id, page = 1, perPage = 4) => {
  const fetchUrl = `${API_URL}pc/v2/posts?categories=${id}&page=${page}&per_page=${perPage}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  const totalPosts = res.headers.get('X-WP-Total');
  const totalPages = res.headers.get('X-WP-TotalPages');

  return { data, totalPosts, totalPages };
};

export const fetchBlogId = async (slug) => {
  const fetchUrl = `${API_URL}pc/v2/posts?slug=${slug}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchComments = async () => {
  const fetchUrl = `${API_URL}wp/v2/comments`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchCategories = async () => {
  const fetchUrl = `${API_URL}wp/v2/categories`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchCategoriesId = async (slug) => {
  const fetchUrl = `${API_URL}wp/v2/categories?slug=${slug}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
