import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? '/assets/img/Video/VID-20230331-WA0018.mp4'
    : '';
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
          <video style={{width:"100%"}}className='HomeVideo' autoPlay muted loop  controls src="/assets/img/Video/VID-20230331-WA0018.mp4" type="video/mp4" alt="apple"/>
        </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
