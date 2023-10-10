import { API_URL, author } from "botak/api/auth";
import Homepage from "botak/app/components/Homepage";
import NotFound from "botak/app/not-found";
import TopBar from "botak/components/ProductCategory/TopBar";
import MainList from "botak/components/ProductCategory/MainList";

// Set
const headers = {
  method: 'GET',
  headers: author,
};

export const generateStaticParams = async () => {
  const res = await fetch(`${API_URL}wc/v3/products/categories?slug=printing-products`, headers);
  const path = await res.json();

  if (path.length > 0) {
    return path.map(item => ({ slug: [item.slug] }));
  }
};

const getProductCategory = async (params) => {
  let slug = '';
  let refine = '';
  const count = params.slug.length;
  const dataTopBar = [];
  const dataRefine = [];
  const dataCategory = [];

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

  try {
    for (const i of params.slug) {
      const url = `${API_URL}wc/v3/products/categories?slug=${i}`;
      const res = await fetch(url, headers)
      const data = await res.json();
      dataTopBar.push(...data)
    }
  } catch (error) { }

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
    const display = jsonOne[0]?.display;
    const idRefine = jsonTwo[0].id;

    // Get Refine
    if (params.slug.length === 1) {
      dataRefine.push(...jsonTwo)
    }
    else {
      const data = await fetch(`${API_URL}wc/v3/products/categories?parent=${idRefine}&per_page=100`, headers);
      const refineRes = await data.json();
      dataRefine.push(...refineRes);
    }

    // Get Category
    if (display === 'subcategories' || display === 'both') {
      const data = await fetch(`${API_URL}wc/v3/products/categories?parent=${id}&per_page=100`, headers);
      const categoryRes = await data.json();
      dataCategory.push(...categoryRes);
    }

    return {
      currentId: id,
      display,
      dataTopBar,
      dataRefine,
      dataCategory,
    }
  };

  return undefined;
};

const ProductCategory = async ({ params }) => {
  const result = await getProductCategory(params);

  if (!result) {
    return <NotFound />
  }

  return (
    <Homepage>
      <TopBar dataTopBar={result.dataTopBar} />
      <MainList
        currentId={result.currentId}
        display={result.display}
        dataTopBar={result.dataTopBar}
        dataRefine={result.dataRefine}
        dataCategory={result.dataCategory}
      />
    </Homepage>
  )
};

export default ProductCategory;