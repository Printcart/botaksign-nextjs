import { fetchArchiveProductId } from 'botak/api/homepage';
import ArchiveProducts from 'botak/app/components/ArchiveProducts';

const ArchiveProductsServer = async ({ params }) => {
  const { id } = params;
  const data = await fetchArchiveProductId(id);
  return <ArchiveProducts data={data} />;
};
export default ArchiveProductsServer;
