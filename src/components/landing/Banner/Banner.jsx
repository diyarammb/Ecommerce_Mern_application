import Link from 'next/link';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useProductContext } from 'Context/productContext';

export const Banner = () => {
  const {isBanners,Banners}=useProductContext();

  if(isBanners){
    return<div>Loading...</div>
  }
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
      <div
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <div className="col-12 bg-black">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
            {Banners.map((curElem)=>{
          const {photo,url,id}=curElem;
          return(
            <SwiperSlide>
            <img
              src={`https://meeraki.com/public/${photo}`}
              alt={url}
              style={{ width: "100%" }}
              key={id+photo}
            /> 
            </SwiperSlide>
          ) 
        })}
        </Swiper>
      </div>
      <div className="col-md-4 offset-md-4 mt-4 pb-3">
        <h6
          className="text-center mt-4 pb-4"
          style={{ fontSize: "15px", textAlign: "center", lineHeight: "1.6" }}
        >
          Meeraki is a fashion brand created especially for young and lively
          youth. It consists of a hardworking and enthusiastic group of people.
        </h6>
      </div>
      </div>
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
