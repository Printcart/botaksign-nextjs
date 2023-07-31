import { fetchArchiveProductId } from 'botak/api/homepage';
import ArchiveProducts from './ArchiveProducts';

const ArchiveProductsServer = async ({ params }) => {
  const { id } = params;
  const data = await fetchArchiveProductId(id);
  return <ArchiveProducts data={data} />;
};
export default ArchiveProductsServer;
