import blogData from 'data/blog/blog';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PostComment } from './PostComment/PostComment';
import { PostContent } from './PostContent/PostContent';
import { useProductContext } from 'Context/productContext';

const API = "https://meeraki.com/api/v2/blogs/";

export const Post = () => {
  const router = useRouter();
  const {getBlogDetail,BlogDetail}=useProductContext();
  console.log("BlogDetail",BlogDetail);
  const blogs = [...blogData];
  const [blog, setBlog] = useState(null);

  const {id}=router.query;

  useEffect(() => {
    getBlogDetail(`${API}${id}`);
  }, [router.query.id]);

  if (blog) return <></>;

  return (
    <>
      {/* <!-- BEGIN POST --> */}
      <div className='post'>
        <div className='wrapper'>
          <PostContent blog={BlogDetail} />
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- POST EOF   --> */}
    </>
  );
};
