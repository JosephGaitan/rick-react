import React from 'react'
import { useState } from 'react'

const SearchingBar = ({ useSearch, setUseSearch, setCount }) => {
  return (
      <input
              className="border-2 border-lime-700 font-lato m-1 w-full px-5 h-10 rounded-md"
              type="search"
              placeholder="Search by name"
              value={useSearch}
              onChange={function changer(e) {
                setUseSearch(e.target.value)
                setCount(1)
              }}
            >
            </input>
  )
}

export default SearchingBar
