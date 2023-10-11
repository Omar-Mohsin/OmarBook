import React from 'react'
import Link from 'next/link'
function NotAutho() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    You are not authorize to go to this page
    <button style={{ width: '150px', height: '30px', backgroundColor: '#1877f2', borderRadius: '10px', borderStyle: 'none', marginTop: '20px' }}>
      <Link href={'/SignIn'} style={{ color: 'white', textDecoration: 'none', fontSize: '17px' }}>go sign in page</Link>
    </button>
  </div>
  )
}

export default NotAutho