import { RiMenuLine, RiSearchLine } from '@remixicon/react'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-800 text-white flex items-center justify-between py-3 px-10'>
                <div className='flex gap-6'>
                    <h1 className='font-extrabold text-2xl'>TheMovieSeat</h1>
                    <input type="text" className='border-2 border-white rounded-lg bg-white w-96 text-black px-2' placeholder='Search for Movies' />
                </div>
                <div className='flex gap-4'>
                    <select>
                        <option value="">Bhilai</option>
                        <option value="">Durg</option>
                        <option value="">City</option>
                    </select>
                    <button className='bg-rose-500 rounded-md px-2'>Sign in</button>
                    <RiMenuLine />
                </div>
            </div>
        </>
    )
}

export default Navbar