import React, { useEffect, useState } from 'react'
import Cars from './Cars'

const MyCars = () => {
    const[cars, setCars]= useState([])

    useEffect(()=>{
        fetch("https://freetestapi.com/api/v1/cars")
        .then(result=>result.json())
        .then (data=>{
            setCars(data);
        })
    },[])
  return (
    <div>
        {cars.map(car=>(
           <Cars
           key={car.id}
           id={car.id}
           make= {car.make}
           model= {car.model}
           year= {car.year}
           color= {car.color}
           price={car.price}
           mileage={car.mileage}


           />
        ))}
    </div>
  ) 
}

export default MyCars