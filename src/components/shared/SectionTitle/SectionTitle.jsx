export const SectionTitle = ({ subTitle, title, body }) => {
  return (
    <div className='trending-top'>
      <span className='saint-text' style={{fontFamily:"Mrs Saint Delafield"}}>{subTitle}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
