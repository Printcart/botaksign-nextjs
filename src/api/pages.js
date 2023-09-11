const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const ID_PAGE_PRIVACYPOLICY = process.env.NEXT_PUBLIC_ID_PAGE_PRIVACYPOLICY;
const ID_PAGE_TERMS_AND_CODITIONS = process.env.NEXT_PUBLIC_ID_PAGE_TERMS_AND_CODITIONS;
const ID_PAGE_CAREERS = process.env.NEXT_PUBLIC_ID_PAGE_CAREERS;

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

export const fetchBlog = async (queryParams) => {
  const search = queryParams?.search || '';
  const year = queryParams?.year || '';
  const month = queryParams?.month || '';
  const page = queryParams?.page || 1;
  const perPage = queryParams?.perPage || 4;

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

export const fetchBlogSlug = async (queryParams) => {
  const slug = queryParams?.slug || '';

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

export const fetchPrivacyPolicy = async () => {
  const fetchUrl = `${API_URL}pc/v2/pages/${ID_PAGE_PRIVACYPOLICY}`;
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

export const fetchTermsAndConditions = async () => {
  const fetchUrl = `${API_URL}pc/v2/pages/${ID_PAGE_TERMS_AND_CODITIONS}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchCategoriesId = async (queryParamsId) => {
  const id = queryParamsId?.id || '';
  const page = queryParamsId?.page || 1;
  const perPage = queryParamsId?.perPage || 4;

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

export const fetchCategoriesSlug = async (queryParamsSlug) => {
  const slug = queryParamsSlug?.slug || '';

  const fetchUrl = `${API_URL}wp/v2/categories?slug=${slug}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
  
export const fetchCareer = async () => {
  const fetchUrl = `${API_URL}pc/v2/pages/${ID_PAGE_CAREERS}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
