import Link from 'next/link';

export const NavCol = ({ nav }) => {
  console.log(nav);
  return (
    <div className="col-lg-2 col-md-4">
                <div className="text-left text-md-left mt-4">
                 <h4 className="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4 text-white">
                   {nav.title}
                  </h4>
                  <ul className="list-unstyled footer-links">
                  {nav?.navLinks?.map((nav, indx) => (
          <li className="mb-2" key={nav.name + indx}>
            <Link  className="opacity-50 hov-opacity-100 text-reset fs-13" href={nav.path}>
              {nav.name}
            </Link>
          </li>
        ))}
                  </ul>
                  </div></div>
  );
};
