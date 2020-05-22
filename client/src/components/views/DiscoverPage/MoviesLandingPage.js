import React,{useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { API_URL, API_KEY } from '../../Config'



function MoviesLandingPage() {
	
	 useEffect(() => {
       
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response=> response.json())
            .then(response => {
                console.log(response)
            })

    }, [])
	
	
    return (
        <>
        <div className="app">
            <FaComment style={{ fontSize: '8rem' }} /><br />
            <span style={{ fontSize: '3rem' }}>This is discover page speaking !</span>
        </div>
        <div style={{ float:'right' }}>Developed by H.A.B.M. Faisal Akandha</div>
        </>
    )
}

export default MoviesLandingPage
