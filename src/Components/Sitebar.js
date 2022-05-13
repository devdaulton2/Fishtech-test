import React from 'react';

function Sitebar() {
    let hour = new Date().getHours()
    return (
        <div>
            <nav className="navbar navbar-dark .navbar-expand{-sm|-md|-lg|-xl|-xxl} bg-dark">
                <div className="container-fluid">
                      <a className="navbar-brand" href="./Home.js">{hour >= 4 && hour < 12 ? "Good Morning, Fishtech Group" : hour >= 12 && hour < 16 ? "Good Afternoon, Fishtech Group" : "Good Evening, Fishtech Group"}!</a>
                </div>
            </nav>
        </div>
    )
}

export default Sitebar; 