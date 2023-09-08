import { AllCategory } from 'components/AllCategory/AllCategory';
import { Category } from 'components/Category/Category';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'All categories',
    path: '/categories',
  },
];
const CategoriesPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='All categories'>
      <AllCategory/>
    </PublicLayout>
  );
};

export default CategoriesPage;
