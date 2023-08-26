const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};

export const fetchBlog = async (page = 1, perPage = 4) => {
  const fetchUrl = `https://botakdev.printcart.com/wp-json/wp/v2/posts?page=${page}&perPage=${perPage}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const dataPosts = await res.json();
  if (dataPosts.errors) {
    throw new Error('Failed to fetch API');
  }
  const totalPosts = res.headers.get('X-WP-Total');
  const totalPages = res.headers.get('X-WP-TotalPages');
  console.log(data, 'dataaaaa');

  return { dataPosts, totalPosts, totalPages };
};

export const fetchBlogId = async (slug) => {
  const fetchUrl = `https://botakdev.printcart.com/wp-json/wp/v2/posts?slug=${slug}`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchComments = async () => {
  const fetchUrl = `https://botakdev.printcart.com/wp-json/wp/v2/comments`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};

export const fetchCategories = async () => {
  const fetchUrl = `https://botakdev.printcart.com/wp-json/wp/v2/categories`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
