import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout.js';
import { getAllBikes } from '../redux/actions/bikesAction'
import { Button ,Row, Col} from 'antd';
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import "./Home.css"

function Home() {
  const {bikes} = useSelector(state=>state.bikeReducer)
  const {loading} = useSelector(state=>state.alertsReducer)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getAllBikes())
  },[])

  return(
    <div className="back">
  <DefaultLayout>
     
     {loading ==true && (<Spinner/>)}

   <Row justify='center' gutter={16} className='mt-5'>
    
    {bikes.map(bike=>{
      return <Col lg={5} sm={24} xs={24}>
         <div className='bike p-2 bs1'>
           <img src={bike.image} className='bikeimg'/>

           <div className='bike-content d-flex align-items-center justify-content-between'>

             <div>
                  <p>{bike.name}</p>
                  <p>{bike.rentPerHour} Rent Per Hour /-</p>
             </div>

             <div class="butt">
               <button className='btn butt btn-primary'><Link to={`/booking/${bike.id}`}>Book Now</Link></button>
             </div>

           </div>
         
         </div>
      </Col>
    })}

   </Row>


  </DefaultLayout>
  </div>
  )
 ;
}

export default Home;
