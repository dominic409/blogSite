import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import CategoryDropdown from './CategoryDropdown/CategoryDropdown'
const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 w-11/12 ">
      <div className="border-b w-full inline-block border-blue-400 py-6">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Graph CMS</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <div className="md:float-right mt-2 text-white ml-4 font-semibold cursor-pointer" >
          <CategoryDropdown />
          </div>
          {/* {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}
              </span>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Header;