import { useProductContext } from 'Context/productContext';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';


export const EndOFSeason = (endofseason) => {
  console.log('line of 7 endofseason',endofseason);
  const {endSeasonProduct}=useProductContext();
  console.log(endSeasonProduct);

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          title='End Of Season'
        />

        <div className='products-items'>
          <ProductsCarousel products={endSeasonProduct} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};

export const getServerSideProps=async()=>{
  const res=await fetch('https://meeraki.com/api/v2/products/end-of-season');
  const endofseason=await res.json();
   return{
       props:{
        endofseason
       }
   }
}