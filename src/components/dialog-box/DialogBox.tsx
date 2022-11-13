import React, { Fragment } from 'react'
import IPropsExitDialogBox from '../../interface/IPropsExitDialogBox';
import { hiddeDialogBox } from '../../store/action/dialogBoxAction';
// import { useDispatch } from "react-redux";



const DialogBox: React.FC<IPropsExitDialogBox> = ({ exit }) => {
  // const dispatch = useDispatch()
  return (
    <Fragment>
      <section className='xl:box-border  xl:shadow-md xl:relative  xl:bg-white xl:p-[20px]'>
        <form>
          <div className='xl:flex xl:justify-between  xl:p-[10px]'>
            <h1 className='uppercase'>dialog box - create box</h1>
            <button type='submit' className='xl:py-[3px] xl:shadow-sm  xl:px-[20px] xl:rounded-md xl:bg-green-400'>save</button>

          </div>
          <div className='xl:flex xl:flex-col xl:p-[10px]'>
            <input className='xl:p-[4px] xl:border-1 xl:border-slate-100 focus:outline-none' type="text" name="title" id="title" placeholder='Title Input' />
            <hr />
            <textarea className='xl:outline-none xl:p-[4px]' name="body" id="body" placeholder='Body Input'></textarea>
          </div>
        </form>
        <button onClick={() => exit()} className='border-black border-2 xl:w-[25px] xl:h-[25px] leading-[20px] xl:rounded-full xl:absolute xl:top-[5px] xl:right-[5px] xl:opacity-25 hover:opacity-100'>x</button>
      </section>
    </Fragment>
  )
}

export default DialogBox