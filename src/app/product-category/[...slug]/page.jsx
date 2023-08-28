import { API_URL, author } from "botak/api/auth";
import Homepage from "botak/app/components/Homepage";
import MainList from "../../../../components/ProductCategory/MainList";
import NotFound from "botak/app/not-found";

// Set
const headers = {
  method: 'GET',
  headers: author,
};

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}wc/v3/products/categories?slug=printing-products`, headers);
  const path = await res.json();

  if (path.length > 0) {
    return path.map(_item => ({ slug: [_item.slug] }));
  }
};

async function getProductCategory(params) {
  let slug = '';
  let refine = '';
  const dataRefine = [];
  const dataCategory = [];
  const dataProduct = [];
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
      dataCategory.push(...categoryRes);
    }
    if ((display === 'products' || display === 'default')) {
      const data = await fetch(`${API_URL}wc/v3/products?category=${id}`, headers);
      const productRes = await data.json();
      dataProduct.push(...productRes);
    }
    if (display === 'both') {
      const apiUrls = [
        `${API_URL}wc/v3/products/categories?parent=${id}`,
        `${API_URL}wc/v3/products?category=${id}`,
      ]
      const [categoryRes, productRes] = await Promise.all(
        apiUrls.map((url) => fetch(url, headers))
      );

      const [categories, products] = await Promise.all([categoryRes.json(), productRes.json()]);

      dataCategory.push(...categories);
      dataProduct.push(...products);
    }

    // Return
    return {
      dataRefine,
      dataCategory,
      dataProduct,
    }
  };

  return undefined;
};

const ProductCategory = async ({ params }) => {
  const data = await getProductCategory(params);

  if (!data) {
    return <NotFound />
  }

  return (
    <Homepage>
      <MainList
        dataRefine={data.dataRefine}
        dataCategory={data.dataCategory}
        dataProduct={data.dataProduct}
      />
    </Homepage>
  )
};

export default ProductCategory;