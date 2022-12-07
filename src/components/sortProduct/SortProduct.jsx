import React from 'react';
import "./sortProduct.css"

const SortProduct = ({sortItem, setSortItem}) => {

        const onChangeHandler=(e)=>{
            setSortItem(e.target.id)
        }

  return (
    <div>
       <div className="filter-price">
        <p>Filter by Price</p>
       <div className="form-group">
            <input value={sortItem} type="checkbox" name='sort' id='low' onChange={onChangeHandler}/>
            <label id="low">Low</label>
        </div> 
       <div className="form-group">
            <input value={sortItem} type="checkbox" name='sort' id='high' onChange={onChangeHandler}/>
            <label id="high">High</label>
        </div> 
       </div>
        <div className="sort-alphabetically">
            <p>Sort Alphabetically</p>
        <div className="form-group">
            <input value={sortItem} type="checkbox" name='sort' id='ascending' onChange={onChangeHandler}/>
            <label id="ascending">Alphabetically, A-Z</label>
        </div> 
        <div className="form-group">
            <input value={sortItem} type="checkbox" name='sort' id='descending' onChange={onChangeHandler}/>
            <label id="descending">Alphabetically, Z-A</label>
        </div> 
        </div>
    </div>
  )
}

export default SortProduct