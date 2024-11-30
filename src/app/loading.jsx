import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center mt-10'>
        <Image priority={true} fill src="spinner.svg" alt="Loading..." />
    </div>
  )
}
