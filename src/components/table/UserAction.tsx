/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import { trashIcon, updateIcon, viewIcon } from "../../assets/";
import { useNavigate } from "react-router-dom";
import IPropsUserAction from '../../interface/IPropsUserAction';
import axios from 'axios';

const UserAction: React.FC<IPropsUserAction> = ({ userAction }) => {
  const navigate = useNavigate()

  return (
    <table className='xl:table-auto xl:border-collapse xl:flex xl:flex-col  xl:justify-center  xl:w-full xl:box-border'>
      <thead className='  xl:bg-slate-100 '>
        <h1 className='xl:py-[7px] xl:px-[20px] xl:text-center xl:w-full xl:mx-auto xl:uppercase xl:font-semibold'>Action</h1>

      </thead>
      <tbody>
        {
          userAction.map((value: any, index: number) => (
            <tr key={index}>
              <td className='xl:py-[7px] xl:px-[10px] xl:text-center'>
                <button onClick={() => navigate('/detail')} className='xl:bg-[#facc15] xl:w-[30px] xl:h-[30px]  xl:rounded-full'>
                  <img className='xl:block xl:w-[20px] xl:h-[20px] xl:mx-auto' src={viewIcon} alt="" />
                </button>
              </td>
              <td className='xl:py-[7px] xl:px-[10px] xl:text-center'>
                <button className='xl:bg-[#10b981] xl:w-[30px] xl:h-[30px]  xl:rounded-full'>
                  <img className='xl:block xl:w-[20px] xl:h-[20px] xl:mx-auto' src={updateIcon} alt="" />
                </button>
              </td>
              <td className='xl:py-[7px] xl:px-[10px] xl:text-center'>
                <button onClick={() => console.log("first")} className='xl:bg-[#f43f5e] xl:w-[30px] xl:h-[30px]  xl:rounded-full'>
                  <img className='xl:block xl:w-[20px] xl:h-[20px] xl:mx-auto' src={trashIcon} alt="" />
                </button>
              </td>
            </tr>

          ))
        }

      </tbody>
    </table>
  )
}

export default UserAction