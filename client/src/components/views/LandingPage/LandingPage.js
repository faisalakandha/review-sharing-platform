import React,{useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from '../../Config'

 useEffect(() => {
       
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response=> response.json())
            .then(response => {
                console.log(response)
            })

    }, [])

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
