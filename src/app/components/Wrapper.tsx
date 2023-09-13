import React from 'react'

const Wrapper = ({children}:any) => {
  return (
    <section className='flex flex-wrap bg-slate-500 justify-center w-[500px] '>
        {children}
    </section>
  )
}

export default Wrapper