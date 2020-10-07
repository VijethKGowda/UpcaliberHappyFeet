import React from "react";

export const Product = ({ name, image, price, discount, addToCart }) => {
  return (
    <div className="mx-4 w-full md:w-2/5 lg:w-1/4" key={name}>
      <div className="flex flex-col flex-wrap flex-grow justify-between">
        <div className="p-4 w-full">
          <img alt="ecommerce" className="w-full h-48 my-4 block" src={image} />
          <div className="flex flex-col justify-between items-center text-base">
            <button
              className="focus:outline-none float-right border-2 border-green-600 text-green-600 lg:text-sm text-xs font-bold py-2 text-center px-4"
              onClick={addToCart}
            >buy</button>
            <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
            <div className="py-2">
              <span className="font-bold text-lg text-gray-700">
                ₹{price.actual}
              </span>
              <span className="line-through text-sm text-gray-500 px-2">
                {price.display}
              </span>
              <span className="text-green-500">{`${discount}% off`}</span>
            </div>
          </div>
        </div>
        <div className="text-center py-2">

        </div>
      </div>
    </div>
  );
}
