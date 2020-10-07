import React from 'react'

export const Filters = ({ onSort }) => {
  return (
    <div className="pb-2 bg-white mt-4 pt-4 px-3">
      <div className="flex items-center">
        <div>
          Sort By: <select onChange={onSort} className="outline-none">
            <option value='PRICE_ASC'>Price-low to high</option>
            <option value='PRICE_DESC'>Price-high to low</option>
          </select>
        </div>
      </div>
    </div>

  )
}
