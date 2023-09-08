import { useProductContext } from 'Context/productContext';
import { Categories1 } from 'components/Category/Categories/Categories1';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import categoriesData from 'data/category/category';

export const TopCategories = () => {
  const {HomeImage4,isHomeImage4Loading}=useProductContext();
  const categories = [...HomeImage4].slice(0, 3);
  console.log("HomeImage4",HomeImage4);
  if(isHomeImage4Loading){
    return(
      <div>....Loading</div>
    )
  }
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='top-categories'>
        <SectionTitle
          title='Shop by Category'
        />
        <div className='top-categories__items'>
          {<Categories1 categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
