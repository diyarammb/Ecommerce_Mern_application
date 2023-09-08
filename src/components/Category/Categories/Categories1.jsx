import { Card1 } from './Card/Card1';

export const Categories1 = ({ categories }) => {
  return (
    <>
      {/* <!-- BEGIN  CATEGORIES --> */}
      {categories.map((category) => (
        <Card1 key={category.id+category.image_title} category={category} />
      ))}
      {/* <!--  CATEGORIES EOF   --> */}
    </>
  );
};
