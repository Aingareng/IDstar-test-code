import React from 'react'
import { useSelector } from "react-redux";

const UserBio = () => {
  const state = useSelector((state: any) => state.users)
  console.log(state)
  return (
    <section>
      <ul>
        <li>
          <p>Name: Fahri</p>
        </li>
        <li>
          <p>Gender: Male</p>
        </li>
        <li>
          <p>Email: ngarengai@gmail.com</p>
        </li>
      </ul>
    </section>
  )
}

export default UserBio