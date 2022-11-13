import React, { Fragment } from 'react'
import { useDispatch } from "react-redux";
import IPropsCreatePost from '../../interface/IPropsCreatePost';
import { showDialogBox } from '../../store/action/dialogBoxAction';



const PostlList: React.FC<IPropsCreatePost> = ({ create }) => {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <section className='xl:flex xl:justify-between xl:items-center uppercase xl:p-[15px] xl:bg-slate-200 xl:rounded-md xl:mb-[10px] '>
        <h1>post list</h1>
        <button onClick={() => create()} className='xl:px-[10px] xl:rounded-md xl:bg-sky-500 xl:py-[6px] xl:shadow-sm uppercase xl:text-sm'>create post</button>
      </section>
      <section className='xl:p-[15px] xl:flex xl:justify-between xl:shadow-md'>
        <div className='border-slate-50 border-[1px] xl:px-[10px]  xl:w-[70%]'>
          <h1 className='xl:mb-[10px] xl:text-xl'>Title</h1>
          <hr />
          <p className='xl:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque velit, perspiciatis pariatur nihil, quos obcaecati assumenda ducimus blanditiis expedita ullam, cum aliquam eaque accusamus inventore voluptatum voluptas. Assumenda, unde nam velit repellendus recusandae, facilis iusto, nesciunt aliquam sed quisquam illum natus atque? Ducimus cum a dolor. Doloremque, veniam? Doloribus, delectus!</p>
        </div>
        <div>
          <button className='xl:px-[10px] xl:rounded-md xl:bg-rose-500 xl:py-[6px] xl:shadow-sm xl:font-medium uppercase xl:text-sm'>delete</button>
        </div>
      </section>

    </Fragment>
  )
}

export default PostlList