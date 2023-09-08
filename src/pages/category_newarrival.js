import { Category } from 'components/Category/Category';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'All Category',
    path: '/categories',
  },
  {
    label: 'New Arrivals',
    path: '/category_newarrival',
  },
];
const category_newarrival = (newarrival) => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='New Arrivals' description="
    The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics.">
      <Category newarrival={newarrival.newarrival.data}/>
    </PublicLayout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://meeraki.com/api/v2/products/new-arrival`)
  const newarrival = await res.json()

  // Pass data to the page via props
  return { props: { newarrival} }
}

export default category_newarrival;
