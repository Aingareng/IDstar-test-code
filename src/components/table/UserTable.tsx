import React from 'react'
import IPropsUserTable from '../../interface/IPropsUserTable'
import Pagination from '../pagination/Pagination'

const UserTable: React.FC<IPropsUserTable> = ({ user }) => {
  return (
    <table className='xl:table-auto xl:border-collapse  xl:w-full xl:box-border'>
      <thead className='  xl:bg-slate-100'>
        <tr >
          <th className='xl:py-[7px] xl:px-[20px] xl:text-center'>ID</th>
          <th className='xl:py-[7px] xl:px-[20px] xl:text-center'>NAME</th>
          <th className='xl:py-[7px] xl:px-[20px] xl:text-center'>EMAIL</th>
          <th className='xl:py-[7px] xl:px-[20px] xl:text-center'>GENDER</th>
          <th className='xl:py-[7px] xl:px-[20px] xl:text-center'>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((value: any, index: number) => (
            <tr key={index} >
              <td className='xl:py-[11px] xl:px-[20px] xl:text-center'>{value.id}</td>
              <td className='xl:py-[11px] xl:px-[20px] xl:text-center'>{value.name}</td>
              <td className='xl:py-[11px] xl:px-[20px] xl:text-center'>{value.email}</td>
              <td className='xl:py-[11px] xl:px-[20px] xl:text-center'>{value.gender}</td>
              <td className='xl:py-[11px] xl:px-[20px] xl:text-center'>{value.status}</td>
            </tr>
          ))
        }
      </tbody>
      <tfoot className='xl:bg-slate-100 '>
        <tr >
          <td colSpan={5}><Pagination /></td>
        </tr>
      </tfoot>
    </table>
  )
}

export default UserTable