import { Card } from './Card/Card';

export const Categories = ({ categories }) => {
  return (
    <>
      {/* <!-- BEGIN  CATEGORIES --> */}
      {categories.map((category) => (
        <Card key={category.id} category={category} />
      ))}
      {/* <!--  CATEGORIES EOF   --> */}
    </>
  );
};
