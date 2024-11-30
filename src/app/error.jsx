'use client'

import { useEffect } from 'react'

export default function error({ error, reset }) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        console.log(error);
    }, [error])
    return (
        <div className='text-center mt-10'>
            <h1>Something went wrong. Pleasy try again.</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>
                Try Again
            </button>
        </div>
    )
}
