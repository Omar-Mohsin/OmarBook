import React from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css'
function Navbar() {
    return (
        <div className='navContainer'>
            <h1 className='logo'>OmarBook</h1>
            <nav className='navbar'>
                <Link href={'/Feed'} style={{ textDecoration: 'none', color: 'black' }}>
                    <HomeIcon>Feed</HomeIcon>
                </Link>
                <Link href={'/Friends'} style={{ textDecoration: 'none', color: 'black' }}>

                    <PeopleIcon>Friends</PeopleIcon>
                </Link>

                <Link href={'/Profile'} style={{ textDecoration: 'none', color: 'black' }}>

                    <PersonIcon>Profile</PersonIcon>
                </Link>

            </nav>
        </div>
    )
}

export default Navbar