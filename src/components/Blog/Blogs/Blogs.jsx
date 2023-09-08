import { Card } from './Card/Card';

export const Blogs = ({ blogs }) => {
  return (
    <>
      {/* <!-- BEGIN  BLOG --> */}

      <div className='blog-items'>
        {blogs.slice(0,2).map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>

      {/* <!--  BLOG EOF   --> */}
    </>
  );
};
