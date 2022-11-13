import React, { useState } from 'react'
// import { useSelector } from "react-redux"
import { DialogBox, PostlList, UserBio } from '../../components'
import { turnLeftIcon } from "../../assets";
import { useNavigate } from 'react-router-dom';




const Detail = () => {
  // const hanldeDialogBox = useSelector((state: any) => state.dialogBox)
  const navigate = useNavigate()
  const [state, setState] = useState({
    blur: 'xl:blur-none',
    hidden: 'hidden'
  })
  const showDialogBox = () => {
    setState({
      ...state,
      blur: "xl:blur-sm",
      hidden: ""
    })
  }
  const hiddeDialogBox = () => {
    setState({
      ...state,
      blur: 'xl:blur-none',
      hidden: 'hidden'
    })
  }
  // document.querySelector("body")?.addEventListener('click', () => {
  //   setState({
  //     ...state,
  //     blur: "xl:blur-none",
  //     hidden: "hidden"
  //   })
  // })

  return (
    <div className='xl:relative'>
      <section className={String(state.blur)}>
        <header className='xl:p-[20px] xl:flex xl:items-center xl:justify-between  xl:w-[60%] xl:shadow-md xl:mx-auto xl:mt-[20px] xl:'>
          <h1 className='xl:uppercase'>view user</h1>
          <img onClick={() => navigate('/')} className='xl:w-[30px] xl:cursor-pointer xl:h-[30px]' src={turnLeftIcon} alt="" />
        </header>
        <main className='xl:p-[20px] xl:mt-[1%] xl:w-[60%] xl:mx-auto'>
          <section className=''>
            <UserBio />
          </section>
        </main>
        <footer className=' xl:box-border xl:w-[60%] xl:mx-auto xl:p-[20px] xl:rounded-md'>
          <PostlList create={showDialogBox} />
        </footer>
      </section>
      <section className={`${String(state.hidden)} xl:absolute xl:top-[20%] xl:left-[20%]   xl:w-[60%] `}>
        <DialogBox exit={hiddeDialogBox} />
      </section>

    </div>
  )
}

export default Detail