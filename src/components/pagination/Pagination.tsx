import React from 'react'
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from '../../store/action/paginationAction';


const Pagination = () => {
  const dispatch = useDispatch()
  return (
    <div className=' xl:flex xl:justify-center xl:p-[10px]'>
      <button onClick={() => dispatch(prevPage(1))}>PREV</button>
      <p className='xl:mx-[10px]'>|</p>
      <button className={''} onClick={() => dispatch(nextPage(1))} >NEXT</button> <br />
    </div>
  )
}

export default Pagination