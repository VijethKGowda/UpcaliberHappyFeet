import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Filters } from "../components/FiltersTop";
import { Product } from "../components/product";
import CartIcon from '../components/cartIcon'
import Checkbox from '@material-ui/core/Checkbox';

import { productsJSON } from "../data/products";

export const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('NAME_ASC');
  const [filterBy, setFilterBy] = useState('');
  const [cartSize, setCartSize] = useState(0)

  const [startRange, setStartRange] = useState('0')
  const [endRange, setEndRange] = useState('100000')

  const [col, setCol] = useState([])

  useEffect(() => {
    fetchData();
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart || "[]");
    setCartSize(cart.length)
  }, []);

  // FETCH PRODUCTS

  const fetchData = () => {
    // fetch('data/products.js')
    //   .then(resp => {
    //     return resp.json()
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(e => {
    //     // TODO: Handle Errors
    //     console.error(e);
    //   })
    setProducts([...productsJSON]);
  }


  const addToCart = (index) => {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart || "[]");

    const productToAdd = products[index];
    productToAdd.quantity = 1;
    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartSize(cart.length)
  }

  const handleSort = (e) => {
    setSortBy(e.target.value);
  }
  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  }

  const sortProducts = (item1, item2) => {
    let compareElementForA = item1.name;
    let compareElementForB = item2.name;

    if (sortBy === 'PRICE_ASC' || sortBy === 'PRICE_DESC') {
      compareElementForA = item1.price.actual;
      compareElementForB = item2.price.actual;
    }

    if (compareElementForA < compareElementForB) {
      if (sortBy.includes('DESC')) {
        return 1;
      }
      return -1;
    }
    if (compareElementForA > compareElementForB) {
      if (sortBy.includes('DESC')) {
        return -1;
      }
      return 1;
    }
    return 0;
  };


  const handleChange = (e) => {
    let options = col
    let index

    if (e.target.checked) {
      options.push(e.target.name)
    } else {
      index = options.indexOf(e.target.name)
      options.splice(index, 1)
    }
    setCol([...options])
  }

  const range = () => {

  }


  return (
    <>
      <header className="top-0 lg:px-48 px-3 flex justify-between items-center shadow-lg text-white py-3 w-full bg-indigo-700">
        <div className="font-bold lg:text-lg text-base hover:text-yellow-400 cursor-pointer">
          <Link to="/">
            <svg width="24" height="24">
              <path
                d="M21.9499 9.67141C21.8299 9.29141 21.4799 9.02141 21.0799 8.98141L15.2099 8.48141L12.9199 3.05141C12.7599 2.68141 12.3999 2.44141 11.9999 2.44141C11.5999 2.44141 11.2399 2.68141 11.0799 3.05141L8.78994 8.48141L2.91994 8.98141C2.51994 9.01141 2.17994 9.28141 2.04994 9.67141C1.92994 10.0514 2.03994 10.4714 2.34994 10.7314L6.79994 14.5914L5.46994 20.3314C5.37994 20.7214 5.52994 21.1314 5.85994 21.3714C6.18994 21.6114 6.61994 21.6214 6.95994 21.4214L11.9999 18.3714L17.0499 21.4114C17.2099 21.5114 17.3899 21.5514 17.5699 21.5514C17.7799 21.5514 17.9799 21.4914 18.1599 21.3614C18.4899 21.1214 18.6399 20.7214 18.5499 20.3214L17.2199 14.5814L21.6699 10.7214C21.9599 10.4714 22.0799 10.0514 21.9499 9.67141Z"
                fill="yellow"
              />
            </svg>
          </Link>
        </div>

        <div className="flex flex-row lg:items-center lg:w-auto">
          <CartIcon />
          {cartSize}
        </div>

      </header>
      <div className="flex flex-row bg-gray-200">

        <div className="bg-white m-4 px-3 w-56">
          <h2 className="p-3 text-2xl font-semibold">Filters</h2>

          <h2 className="p-3 text-sm font-semibold uppercase">Range</h2>
          <select onChange={e => { setStartRange(e.target.value) }} className="outline-none py-3">
            <option value='0'>0</option>
            <option value='500'>500</option>
            <option value='1000'>1000</option>
            <option value='2000'>2000</option>
            <option value='3000'>3000</option>
          </select>
          <span className="px-3">to</span><select onChange={e => { setEndRange(e.target.value) }} className="outline-none py-3">
            <option value='1000'>1000</option>
            <option value='2000'>2000</option>
            <option value='3000'>3000</option>
            <option value='5000'>5000</option>
            <option value='10000'>10000</option>
            <option defaultChecked value='1000000'>MAX</option>
          </select>

          <h2 className="p-3 text-sm font-semibold uppercase">Brands</h2>
          <input onChange={handleFilter} placeholder="Search brand" className="border-b border-gray-600 outline-none mx-3" />

          <div className="">
            <h2 className="p-3 mt-4 text-sm font-semibold uppercase">Colors</h2>
            <Checkbox
              onChange={handleChange}
              color="primary"
              name="Black"
            /> Black <br />
            <Checkbox
              onChange={handleChange}
              color="primary"
              name="Blue"
            /> Blue <br />
            <Checkbox
              onChange={handleChange}
              color="primary"
              name="Navy"
            /> Navy <br />
            <Checkbox
              onChange={handleChange}
              color="primary"
              name="Green"
            /> Green <br />
          </div>

        </div>

        <div>
          <Filters
            onSort={handleSort}
          />
          <div className="mt-4 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-white">
            {
              col.length == 0 ?
                <>
                  {products.filter((product) => {
                    return product.name.toLowerCase().includes(filterBy.toLowerCase());
                  }).sort(sortProducts).map((product, index) => {
                    if (startRange < endRange) {
                      if (startRange <= product.price.actual && endRange >= product.price.actual) {
                        return (
                          <>
                            <Product
                              key={`${product.name}-${product.image}-${product.price}`}
                              name={product.name}
                              image={product.image}
                              price={product.price}
                              discount={product.discount}
                              addToCart={() => { addToCart(index) }}
                            />
                          </>
                        )
                      }
                    }
                    else return (
                      <>
                        <Product
                          key={`${product.name}-${product.image}-${product.price}`}
                          name={product.name}
                          image={product.image}
                          price={product.price}
                          discount={product.discount}
                          addToCart={() => { addToCart(index) }}
                        />
                      </>
                    )
                  })}
                </>
                : <>
                  {
                    col.map((c) => {
                      return (
                        <>
                          {products.filter((product) => {
                            return product.name.toLowerCase().includes(filterBy.toLowerCase());
                          }).sort(sortProducts).map((product, index) => {
                            if (startRange < endRange) {
                              if (startRange <= product.price.actual && endRange >= product.price.actual) {
                                return (
                                  <>
                                    {
                                      c == product.color ? <Product
                                        key={`${product.name}-${product.image}-${product.price}`}
                                        name={product.name}
                                        image={product.image}
                                        price={product.price}
                                        discount={product.discount}
                                        addToCart={() => { addToCart(index) }}
                                      /> : null
                                    }
                                  </>
                                )
                              }
                            }
                            else return (
                              <div>
                                Min price range should be less than max price range
                              </div>
                            );
                          })}
                        </>
                      )
                    })
                  }
                </>
            }

          </div>

        </div>
      </div>
    </>
  );
};
