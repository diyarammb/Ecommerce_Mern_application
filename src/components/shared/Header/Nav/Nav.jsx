import { useRouter } from 'next/router';
import Link from 'next/link';
import { useProductContext } from 'Context/productContext';

export const Nav = ({navItem}) => {
  const router = useRouter();
 /* const {isNavbarLoading,navbar,currency}=useProductContext();
  console.log("currency",currency);
  if(isNavbarLoading){
    return<div>Loading.....</div>
}*/

  return (
    <ul className='header-nav'>
    {navItem.map((nav)=>{
      const {name,path}=nav;
      return(
        <li key={nav.id + nav.name}>
          <Link href={path}>
            <a className={path === router.pathname ? 'active' : ''}>
              {name}
            </a>
          </Link>
          </li>
      )
    })}
     
    </ul>
  );
};
