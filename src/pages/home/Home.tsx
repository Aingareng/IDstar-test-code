/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from "react-redux";
import { Addusers, UserTable, UserAction, DialogBoxUser } from "../../components";






const Home = () => {
  const [user, setUser] = useState<[]>([])
  const paginationState = useSelector((state: any) => state.pagination)
  const handleDialogBox = useSelector((state: any) => state.dialogBox)

  const [state, setState] = useState({
    blur: 'xl:blur-none',
    hidden: 'hidden'
  })


  useEffect(() => {
    getData()
  }, [paginationState])

  const getData = async () => {
    const users = await axios.get(`https://gorest.co.in/public/v2/users?page=${String(paginationState)}`)
    const { data } = users
    setUser(data)
  }
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

  return (
    <section className='xl:relative '>
      <div className={String(state.blur)}>
        <header className='xl:shadow-md xl:mt-[5%] xl:rounded-md xl:bg-slate-100  xl:flex xl:items-center xl:justify-between xl:w-[80%] xl:mx-auto xl:pb-[10px] xl:box-border xl:pt-[15px] xl:pl-[20px]'>
          <h1 className='uppercase' > User list</h1>
          <section className=' xl:mt-[20px] xl:mr-[30px] xl:w-[11%]'>
            <Addusers create={showDialogBox} />
          </section>
        </header>
        <main className=' xl:box-border  xl:p-[20px] xl:w-[90%] xl:mx-auto  xl:flex xl:justify-around xl:mt-[20px]'>
          <section className='xl:p-[20px] xl:box-border xl:shadow-md '>
            <UserTable user={user} />
          </section>
          <aside className=' xl:p-[20px] xl:box-border xl:shadow-md '>
            <UserAction userAction={user} />
          </aside>
        </main>
      </div>
      <div className={String(state.hidden)}>
        <DialogBoxUser exit={hiddeDialogBox} />
      </div>


    </section>
  )
}

export default Home