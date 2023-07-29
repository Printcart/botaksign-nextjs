import { fetchArchiveProductId } from 'botak/api/homepage';
import ArchiveProducts from './ArchiveProducts';

const ArchiveProductsServer = async () => {
  const data = await fetchArchiveProductId(295);
  return <ArchiveProducts data={data} />;
};
export default ArchiveProductsServer;
