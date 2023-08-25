const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};
export const fetchBlog = async () => {
  const fetchUrl = `https://botakdev.printcart.com/wp-json/wp/v2/posts/`;
  const res = await fetch(fetchUrl, { headers, method: 'GET' });
  const data = await res.json();
  if (data.errors) {
    throw new Error('Failed to fetch API');
  }
  return data;
};
export const fetchBlogId = async (id) => {
  const fetchUrl = `https://botakdev.printcart.com/wp-json/wp/v2/posts/${id}`;
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
