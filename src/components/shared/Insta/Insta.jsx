import { Card } from './Card/Card';
import { useProductContext } from 'Context/productContext';

export const Insta = () => {
  const {InstaPhoto}=useProductContext();
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTOS --> */}
      <div className='insta-photos'>
        {InstaPhoto.slice(0,6).map((insta) => (
          <Card key={insta.id} insta={insta} />
        ))}
      </div>
      {/* <!-- INSTA PHOTOS EOF   --> */}
    </>
  );
};

