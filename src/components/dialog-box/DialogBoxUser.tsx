import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import IPropsExitDialogBox from '../../interface/IPropsExitDialogBox'
import { hiddeDialogBox } from '../../store/action/dialogBoxAction'


const DialogBoxUser: React.FC<IPropsExitDialogBox> = ({ exit }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    name: '',
    email: '',
    gendre: ''
  })
  return (
    <section className=' bg-white  xl:absolute xl:top-0 xl:left-[340px] xl:mx-auto xl:p-[20px]  xl:rounded-md xl:shadow-sm xl:w-[50%]'>
      <div className='relative'>
        <form className='relative'>
          <input type="text" placeholder='Name' className='xl:inline-block xl:border-[1px] xl:p-[3px] xl:outline-none xl:rounded-md' />
          <input type="text" placeholder='Email' className='xl:mx-[10px] xl:inline-block xl:border-[1px] xl:p-[3px] xl:outline-none xl:rounded-md' />
          <select name="" id="" className='xl:p-[3px] xl:outline-none' >
            <option >Select gendre</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="submit" value="Submit" className='xl:block xl:py-[3px] xl:px-[8px] xl:mt-[20px] xl:rounded-md xl:bg-green-500 xl:cursor-pointer' />
        </form>
        <button onClick={() => exit()} className='xl:absolute xl:-top-3 xl:-right-3 xl:w-[20px] xl:h-[20px] xl:leading-[10px] xl:rounded-full xl:opacity-25 hover:opacity-80'>x</button>
      </div>
    </section>
  )
}

export default DialogBoxUser