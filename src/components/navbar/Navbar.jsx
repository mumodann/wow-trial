import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://imgs.search.brave.com/jGBuCXvS3zJLpTBXI9GXC79Sqw0CHYL5r9yyjnEnDDk/rs:fit:1200:609:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L25ldGZsaXgtdHYt/bG9nby1wbmctOS5w/bmc" alt="" 
                />
                <span>Homepage</span>
                <span>Cast</span>
                <span>Crew</span>
                <span>BTS</span>
            </div>

            <div className="right">
                <Search className="icon"/>
                <span><button>Payment</button> </span>
                <Notifications className="icon"/>
                <img src="https://lh3.googleusercontent.com/a/AEdFTp6Eto4YZ5J_EAylTr6L8xD6AQb7V4jTkIUosV3GGA=s288-p-no" />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar