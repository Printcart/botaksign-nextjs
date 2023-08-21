import { fetchArchiveProductId } from 'botak/api/homepage';
import ArchiveProducts from 'botak/app/components/ArchiveProducts';
import { useParams } from 'next/navigation';

const ArchiveProductsServer = async ({ params }) => {
  const { id } = params;
  // const { data, totalProducts, totalPages } = await fetchArchiveProductId(id);
  const data = await fetchArchiveProductId(id);

  return <ArchiveProducts dataProduct={data} />;
};
export default ArchiveProductsServer;
