import React from "react";
import CartItem from "../components/cartItem";
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <>
      <header className="fixed top-0 lg:px-48 px-3 flex justify-between items-center shadow-lg text-white py-3 w-full bg-indigo-700">
        <div className="font-bold lg:text-lg text-base hover:text-yellow-400 cursor-pointer">
          <Link to="/">
            <svg width="24" height="24" className="inline-block">
              <path
                d="M21.9499 9.67141C21.8299 9.29141 21.4799 9.02141 21.0799 8.98141L15.2099 8.48141L12.9199 3.05141C12.7599 2.68141 12.3999 2.44141 11.9999 2.44141C11.5999 2.44141 11.2399 2.68141 11.0799 3.05141L8.78994 8.48141L2.91994 8.98141C2.51994 9.01141 2.17994 9.28141 2.04994 9.67141C1.92994 10.0514 2.03994 10.4714 2.34994 10.7314L6.79994 14.5914L5.46994 20.3314C5.37994 20.7214 5.52994 21.1314 5.85994 21.3714C6.18994 21.6114 6.61994 21.6214 6.95994 21.4214L11.9999 18.3714L17.0499 21.4114C17.2099 21.5114 17.3899 21.5514 17.5699 21.5514C17.7799 21.5514 17.9799 21.4914 18.1599 21.3614C18.4899 21.1214 18.6399 20.7214 18.5499 20.3214L17.2199 14.5814L21.6699 10.7214C21.9599 10.4714 22.0799 10.0514 21.9499 9.67141Z"
                fill="white"
              />
            </svg> Home
          </Link>
        </div>
      </header>
      <CartItem />
    </>
  );
}
