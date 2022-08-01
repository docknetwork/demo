import React from 'react';
import Link from 'next/link';

export default function Layout({ title = 'Employee Portal', children }) {
  const navLinks = [
    {
      title: 'My Credentials',
      link: '/dashboard',
      active: true,
    },
    // {
    //   title: 'Requests',
    //   link: '/requests',
    // },
  ];

  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gray-50 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4 text-center">
            <a href="https://dock.io" target="_blank" title="home">
              <img
                src="/docklogo.svg"
                className="w-20"
                alt="tailus logo"
              />
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-16 lg:h-16"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Alice Doe</h5>
            <span className="hidden text-gray-400 lg:block">General Manager</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {navLinks.map((link) => (
              <li key={link.link}>
                <Link href={link.link} passHref>
                  <a
                    aria-label="dashboard"
                    className={`relative px-3 py-2 flex items-center space-x-4 rounded-md transition duration-300${
                      link.active ? ' text-gray-600 bg-gray-200' : ''
                    }`}>
                    <span className="-mr-1 font-medium">{link.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <a
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </a>
        </div>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-13 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              {title}
            </h5>
            <button className="w-12 h-13 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4"></div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">
          {children}
        </div>
      </div>
    </>
  );
}
