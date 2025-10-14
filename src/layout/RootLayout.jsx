import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
      <h1>Header</h1>
      <div className='max-w-7xl mx-auto '>
      <Outlet></Outlet>

      </div>
    </div>
  )
}

export default RootLayout
