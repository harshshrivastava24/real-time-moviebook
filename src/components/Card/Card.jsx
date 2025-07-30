import { RiStarFill } from '@remixicon/react'
import React from 'react'

const Card = () => {
    return (
        <>
            <div className='flex gap-8 mt-5 px-5'>
                <div className='w-60'>
                    <div className='bg-zinc-600 h-70 rounded-t-lg'></div>
                    <div className='flex gap-3 bg-black rounded-b-lg px-2 py-1 text-white'>
                        <RiStarFill className='text-rose-500' />
                        <h2>Rating</h2>
                        <h2>Votes</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card