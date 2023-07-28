import { fetchArchiveProduct } from 'botak/api/homepage';
import ArchiveProducts from './ArchiveProducts';

const ArchiveProduct = async () => {
  const data = await fetchArchiveProduct();
  return <ArchiveProducts data={data} />;
};

export default ArchiveProduct;
