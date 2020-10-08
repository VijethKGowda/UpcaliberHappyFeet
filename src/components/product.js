import React from "react";
import { motion } from "framer-motion"

export const Product = ({ name, image, price, discount, addToCart }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-grow justify-between mx-4" key={name}>
      <div className="p-4 w-full">
        <img alt="ecommerce" className="w-full h-48 my-4 block" src={image} />
        <div className="flex flex-col flex-grow justify-between items-center h-auto text-base">
          <button
            className="focus:outline-none my-3 hover:bg-green-600 hover:text-white rounded-sm border-2 border-green-600 text-green-600 lg:text-sm text-xs font-bold py-1 text-center px-8"
            onClick={addToCart}
          >add to cart</button>
          <h2 className="text-gray-900 title-font text-lg font-medium py-3">{name}</h2>
          <div className="flex justify-start py-3">
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
    </motion.div>
  );
}
