import React from 'react'
import { FaComment } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaComment style={{ fontSize: '8rem' }} /><br />
            <span style={{ fontSize: '3rem' }}>Hey ! Be the First one to make a review !</span>
        </div>
        <div style={{ float:'right' }}>Developed by H.A.B.M. Faisal Akandha</div>
        </>
    )
}

export default LandingPage
