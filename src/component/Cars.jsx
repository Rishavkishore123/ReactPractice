import React from 'react'

const Cars = (props) => {
    const {id, make, model, year, color, mileage, price}=props;
  return (
    <div>
        <h5>{id}</h5>
        <h5>{make}</h5>
        <h5>{model}</h5>
        <h5>{year}</h5>
        <h5>{color}</h5>
        <h5>{mileage}</h5>
        <h5>{price}</h5>
    </div>
  )
}

export default Cars