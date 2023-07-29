import { fetchArchiveProduct, fetchArchiveProductId } from 'botak/api/homepage';
import ArchiveProducts from './ArchiveProducts';

const ArchiveProductsServer = async () => {
  const data = await fetchArchiveProductId();
  const datacc = await fetchArchiveProduct();
  return <ArchiveProducts data={data} datacc={datacc} />;
};
export default ArchiveProductsServer;
