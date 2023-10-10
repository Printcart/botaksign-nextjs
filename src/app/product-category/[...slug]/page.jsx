import { API_URL, author } from "botak/api/auth";
import Homepage from "botak/app/components/Homepage";
import NotFound from "botak/app/not-found";
import TopBar from "botak/components/ProductCategory/TopBar";
import MainList from "botak/components/ProductCategory/MainList";
import { getProductCategory } from "botak/api/product-category";

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