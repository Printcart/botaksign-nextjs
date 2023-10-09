import { API_URL, author } from "botak/api/auth";

// Set header
const headers = {
  method: 'GET',
  headers: author,
};

export const fetchProduct = async (currentId, pageParam) => {
  const res = await fetch(`${API_URL}wc/v3/products?category=${currentId}&per_page=12&page=${pageParam}`, headers);

  if (!res.ok) {
    throw new Error('Error loading data');
  }

  const data = await res.json();
  const totalPages = res.headers.get('x-wp-totalpages');
  const nextPage = parseInt(totalPages) === pageParam ? null : pageParam + 1;

  return { data, nextPage };
};