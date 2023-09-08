import { Wishlist } from 'components/Wishlist/Wishlist';
import { useAuthContext } from 'Context/AuthContext';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Wishlist',
    path: '/wishlist',
  },
];
const WishlistPage = () => {
  const {authuser}=useAuthContext();
  console.log("auth",authuser);
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Wishlist'>
      <Wishlist auth={authuser}/>
    </PublicLayout>
  );
};

export default WishlistPage;