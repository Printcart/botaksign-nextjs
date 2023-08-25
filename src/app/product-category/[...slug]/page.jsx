import { API_URL, author } from "botak/api/auth";
import Homepage from "botak/app/components/Homepage";
import MainList from "../../../../components/ProductCategory/MainList";
import NotFound from "botak/app/not-found";

export default async function ProductCategory({ params }) {
  const data = await getProductCategory(params);

  if (!data) {
    return <Homepage><NotFound /></Homepage>
  }

  return (
    <Homepage>
      <MainList dataRefine={data.dataRefine} dataListing={data.dataListing} />
    </Homepage>
  )
};

// Set
const headers = {
  method: 'GET',
  headers: author,
};

async function getProductCategory(params) {
  let slug = '';
  let refine = '';
  const dataRefine = [];
  const dataListing = [];
  const count = params.slug.length;

  // Set
  slug = params.slug[0];
  refine = `per_page=100&parent=0`;
  if (count > 1) {
    slug = params.slug[1];
    refine = `slug=${params.slug[0]}`;
  }
  if (count > 2) {
    slug = params.slug[2];
    refine = `slug=${params.slug[1]}`;
  }

  // Find
  const apiCheck = [
    `${API_URL}wc/v3/products/categories?slug=${slug}`,
    `${API_URL}wc/v3/products/categories?${refine}`,
  ];

  const [resOne, resTwo] = await Promise.all(
    apiCheck.map((url) => fetch(url, headers))
  );

  const [jsonOne, jsonTwo] = await Promise.all([resOne.json(), resTwo.json()]);

  // Check
  if (jsonOne.length > 0) {
    const id = jsonOne[0].id;
    const display = jsonOne[0].display;
    const idRefine = jsonTwo[0].id;

    // Get
    if (params.slug.length === 1) {
      dataRefine.push(...jsonTwo)
    }
    else {
      const data = await fetch(`${API_URL}wc/v3/products/categories?parent=${idRefine}`, headers);
      const refineRes = await data.json();
      dataRefine.push(...refineRes);
    }

    // Get
    if (display === 'subcategories') {
      const data = await fetch(`${API_URL}wc/v3/products/categories?parent=${id}`, headers);
      const categoryRes = await data.json();
      dataListing.push(...categoryRes);
    }
    if ((display === 'products' || display === 'default')) {
      const data = await fetch(`${API_URL}wc/v3/products?category=${id}`, headers);
      const productRes = await data.json();
      dataListing.push(...productRes);
    }
    if (display === 'bold') {
      const apiUrls = [
        `${API_URL}wc/v3/products/categories?parent=${id}`,
        `${API_URL}wc/v3/products?category=${id}`,
      ]
      const [categoryRes, productRes] = await Promise.all(
        apiUrls.map((url) => fetch(url, headers))
      );

      const [categories, products] = await Promise.all([categoryRes.json(), productRes.json()]);

      dataListing.push(...categories, ...products);
    }

    // Return
    return {
      dataRefine,
      dataListing,
    }
  };

  return undefined;
};


export async function generateStaticParams() {
  const res = await fetch(`${API_URL}wc/v3/products/categories?slug=printing-products`, headers);
  const path = await res.json();

  if (path.length > 0) {
    return path.map(_item => ({ slug: [_item.slug] }));
  }
};