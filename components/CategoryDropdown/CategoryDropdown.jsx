import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/index';
import Link from 'next/link';

// import '/style'
const CategoryDropdown = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);
    return (
        <>
            <div className="group inline-block relative">
                <button className=" text-amber-500 font-semibold py-2 pl-4 rounded inline-flex items-center hover:text-white duration-500	">
                    <span className="mr-1">Categories</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 group-hover:block w-max">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-amber-500  ml-4 font-medium cursor-pointer border-2 rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{category.name}</span>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CategoryDropdown



