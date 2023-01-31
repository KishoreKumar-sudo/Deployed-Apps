import React from "react";
const Navbar =()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="/home">Hospital Admin Management System</a>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><a className="nav-link" href="/admin">Admin</a></li> 
                <li className="nav-list"><a className="nav-link" href="/doctor">Doctor</a></li>
                <li className="nav-list"><a className="nav-link" href="/medical">Medical</a></li>
                <li className="nav-list"><a className="nav-link" href="/reception">Reception</a></li>
            </ul>
        </div>
    </nav>
}

export default Navbar

