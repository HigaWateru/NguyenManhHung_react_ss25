import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink() {
    return (
        <div>
            {location.pathname === "/home-page" ? (<Link to='/home-page'>Home page</Link>) : (<Link to='*'>Not Found</Link>)}
        </div>
    )
}
