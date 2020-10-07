import React, { useState, useEffect } from "react";


export default function CartItem({ }) {
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    // Init
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart) || [];
    setCartItems(cart);
  }, [])

  useEffect(() => {
    // Recalculate total amount and discount
    let total = 0;
    let discount = 0;
    cartItems.forEach(item => {
      total += item.price.display * item.quantity;
      discount += item.price.display * item.quantity - item.price.actual * item.quantity;
    })
    setTotalPrice(total);
    setTotalDiscount(discount);
  }, [cartItems]);

  const incrementItem = (index) => {
    const cartItemToIncrement = cartItems[index];
    cartItemToIncrement.quantity += 1;
    cartItems[index] = cartItemToIncrement;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartItems([...cartItems]);
  }

  const decrementItem = (index) => {
    const cartItemToDecrement = cartItems[index];
    cartItemToDecrement.quantity -= 1;
    cartItems[index] = cartItemToDecrement;
    if (cartItemToDecrement.quantity <= 0) {
      cartItems.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartItems([...cartItems]);
  }

  const removeItem = (index) => {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setCartItems([...cartItems]);
  }

  return (
    <div className="lg:px-40 px-3 mt-16 mb-16">
      <section className="lg:mt-16 mt-8">
        <div className="">
          {cartItems.map((item, index) => (
            <div
              className="lg:w-11/12 bg-purple-100 shadow-md rounded-lg mb-2"
              key={item.name}
            >
              <div className="w-full border-solid border-2 border-gray-800">
                <div className="flex items-center justify-start bg-gray-100">
                  <div className="flex-initial text-gray-700 text-center px-2 py-2 m-2">
                    <img
                      src={item.image}
                      className="lg:object-fill h-32 w-40"
                      alt="random"
                    />
                  </div>
                  <div className="w-full flex flex-row justify-between text-gray-700 py-2 m-2">
                    <div>
                      <p className="text-gray-700 text-base">{item.name}</p>
                      <p className="font-semibold text-gray-600">Color : {item.color}</p>
                      <p className="font-semibold text-gray-600">Seller : {item.seller}</p>
                    </div>
                    <div className="px-4 flex flex-row items-center justify-center">

                      <div className="flex items-end py-2 lg:px-6 px-0">
                        <span className="px-2">
                          <button
                            className="rounded-lg outline-none px-2 text-sm flex items-center justify-center font-bold border-solid border-2 border-gray-600 text-gray-600 hover:border-gray-800 hover:text-gray-800"
                            type="button"
                            onClick={() => {
                              decrementItem(index)
                            }}
                          >
                            -
                        </button>
                        </span>
                        <span className="text-center px-4 border-solid border-2 border-gray-700">
                          {item.quantity}
                        </span>
                        <span className="px-2">
                          <button
                            className="rounded-lg outline-none px-2 text-center text-sm flex items-center justify-center font-bold border-solid border-2 border-gray-600 text-gray-600 hover:border-gray-800 hover:text-gray-800"
                            type="button"
                            onClick={() => {
                              incrementItem(index);
                            }}
                          >
                            +
                        </button>
                        </span>
                      </div>

                      <span className="font-bold text-gray-700 pr-5">
                        ₹{item.price.actual}
                      </span>

                      <button
                        className="hover:text-red-500 focus:outline-none text-gray-900 lg:text-sm text-base font-bold py-2"
                        onClick={() => {
                          removeItem(index);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="lg:w-11/12 flex align-center justify-center flex-col mb-2">
            <div className="w-full border-solid border-2 border-gray-800">
              <p className="text-gray-600 uppercase font-bold pl-2 py-2">
                price details
            </p>
              <hr />
              <div className="flex items-center">
                <div className="flex-1 text-gray-700 text-left py-2 m-2">
                  Total Price
              </div>
                <div className="flex-1 text-gray-700 text-left py-2 m-2">:</div>
                <div className="flex-1 text-gray-700 text-center py-2 m-2">
                  ₹{totalPrice}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1 text-gray-700 text-left py-2 m-2">
                  Discount
              </div>
                <div className="flex-1 text-gray-700 text-left py-2 m-2">:</div>
                <div className="flex-1 text-gray-700 text-center py-2 m-2">
                  ₹{totalDiscount}
                </div>
              </div>
              <hr className="bg-gray-900" />
              <div className="flex items-center">
                <div className="flex-1 text-gray-800 font-bold text-left py-2 m-2">
                  Total Payable
              </div>
                <div className="flex-1 text-gray-700 text-left py-2 m-2"></div>
                <div className="flex-1 text-gray-800 font-bold text-center py-2 m-2">
                  ₹{totalPrice - totalDiscount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
