import { RiStarFill } from '@remixicon/react'
import React from 'react'

const Card = () => {
    return (
        <>
            <div className='w-60'>
                <div className='bg-zinc-600 h-70 rounded-t-lg'></div>
                <div className='flex gap-3 bg-black rounded-b-lg px-2 py-1 text-white'>
                    <RiStarFill className='text-rose-500' />
                    <h2>Rating</h2>
                    <h2>Votes</h2>
                </div>
                <div>
                    <h2 className='font-semibold text-lg'>Movie Name</h2>
                    <h3 className='text-zinc-600'>Category</h3>
                </div>
            </div>
        </>
    )
}

export default Card