import { API_URL, author } from "botak/api/auth";
import Homepage from "../../components/Homepage";
import { getProductDetail } from "botak/api/product-detail";

// Set
const headers = {
  method: 'GET',
  headers: author,
};

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}wc/v3/products?slug=paper-label-sticker`, headers);
  const path = await res.json();
  if (path.length > 0) {
    return path.map(_item => ({ slug: _item.slug }));
  }
};

const ProductDetail = async ({ params }) => {
  const { product } = await getProductDetail(params);
  return (
    <Homepage>
    </Homepage>
  )
};

export default ProductDetail;