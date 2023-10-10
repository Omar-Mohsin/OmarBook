import React from 'react'
import './PostForm.css'
import Link from 'next/link'
function NavigationButtons() {
    return (
        <div>
            <Link href={'/Feed'}>
            <button className='navigationButton'>
                Feed
            </button>
            </Link>
            <button className='navigationButton' >
                friends
            </button>
            <button className='navigationButton'>
                profile
            </button>
        </div>
    )
}

export default NavigationButtons