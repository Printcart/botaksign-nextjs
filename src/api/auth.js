export const PAGE_ID = 12599;
export const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export const author = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
  )}`
};