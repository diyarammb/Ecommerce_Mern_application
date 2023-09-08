import { Advantage } from 'components/shared/Advantage/Advantage';
import { Banner } from 'components/landing/Banner/Banner';
import { BrandLogo } from 'components/shared/BrandLogo/BrandLogo';
import { Discount } from 'components/landing/Discount/Discount';
import { Info } from 'components/landing/Info/Info';
import { LatestNews } from 'components/landing/LatestNews/LatestNews';
import NewArrivals  from 'components/landing/NewArrivals/NewArrivals';
import { TopCategories } from 'components/landing/TopCategories/TopCategories';
import { Trending } from 'components/landing/Trending/Trending';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Layout } from 'layout/Layout';
import { EndOFSeason } from 'components/landing/EndOFSeason/EndOFSeason';
import { FeatureProducts } from 'components/landing/FeaturedProducts/FeaturedProducts';
import { FormalEdit } from 'components/landing/FormalEdit/FormalEdit';
import {LastImage} from 'components/landing/LastImage2/LastImage';


export default function Home() {
  return (
    <Layout>
      <Banner />
      {/* option <Trending />*/}
      <NewArrivals/>
      <EndOFSeason/>
      <TopCategories />
      <FeatureProducts/>
      <Info />
      <FormalEdit/>
      <LatestNews />
      <LastImage/>
    </Layout>
  );
}

export const getServerSideProps=async()=>{
  const res=await fetch('https://meeraki.com/api/v2/products/new-arrival');
  const data=await res.json();
   return{
       props:{
         data
       }
   }
}

