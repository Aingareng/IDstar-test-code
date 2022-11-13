import React from 'react'
import { useDispatch } from 'react-redux';
import { addUserIcon } from '../../assets/index';
import IPropsCreatePost from '../../interface/IPropsCreatePost';
import { showDialogBox } from '../../store/action/dialogBoxAction';


const Addusers: React.FC<IPropsCreatePost> = ({ create }) => {
  const dispatch = useDispatch()
  return (
    <section className=' xl:mr-[20px] xl:w-[150px] '>

      <button onClick={() => create()} className='xl:bg-sky-500 xl:flex xl:items-center xl:justify-between xl:text-white xl:rounded-md xl:shadow-sm  xl:p-[8px]  xl:px-[15px] xl:top-0 xl:ease-linear xl:duration-200 hover:bg-sky-800'>
        <img className='xl:w-[20px] xl:block xl:mr-[8px] ' src={addUserIcon} alt="" />
        Add user</button>
    </section>
  )
}

export default Addusers