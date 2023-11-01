import { API_URL, author } from "botak/api/auth";

const headers = {
  method: 'GET',
  headers: author,
};

export const getProductDetail = async (params) => {
  const res = await fetch(`${API_URL}wc/v3/products?slug=${params.slug}`, headers);
  const product = await res.json();
  if (product.length > 0) {
    return {
      product: product[0],
    }
  };
  return undefined;
}