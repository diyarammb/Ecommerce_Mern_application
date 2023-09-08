export const Card = ({ insta }) => {
  const { media_url, link,caption} = insta;
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTO CARD --> */}

      <a href="https://www.instagram.com/houseofmeeraki/" target="_blank" className='insta-photo'>
        <img src={media_url} className='js-img' alt={caption} />
        <div className='insta-photo__hover'>
          <i className='icon-insta'></i>
        </div>
      </a>

      {/* <!-- INSTA PHOTOS EOF --> */}
    </>
  );
};
