import React from 'react'
import { useSelector } from 'react-redux'

const FilterData = () => {
    const filterProducts = useSelector(state => state.product.FilterData)
  return (
    <div>
      
    </div>
  )
}

export default FilterData
