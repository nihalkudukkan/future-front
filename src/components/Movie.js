import React from 'react'
import './movie.css'
import thallumala from "../asset/thallumala.jpg"
import { useNavigate } from 'react-router-dom'

export default function Movie() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className='movie__page'>
        <div className='container'>
            <div className='img__box'>
                <h1 className='brand clickable' onClick={handleClick}>ELEVATE</h1>
                <img src={thallumala} alt="" />
            </div>
            <div className='movie__info'>
              <h2 className='movie__name'>Thallumala</h2>
              <div className='movie__rating'>Rating: 5/10</div>
              <div className='movie__details'>
                Thallumaala is an upcoming Indian Malayalam language action comedy film directed by Khalid Rahman.
                Written by Muhsin Parari and Ashraf Hamza, the film is produced by Ashiq Usman. The film stars Tovino Thomas,
                Kalyani Priyadarshan and Shine Tom Chacko in lead roles.
              </div>
              <div className='movie__director'>Directed by: Khalid Rahman</div>
              <div className='movie__producer'>Produced by: Ashiq Usman</div>
              <div className='movie__review__box'>
                <div className='movie__review__head'>Review</div>
                <div className='movie__reviews'>
                A SUPER GOOD WAY TO A MOVIE from a critic's viewpoint .
  Today we hv too many movies of all genres made by Bollywood, Kollywood, Tollywood yet Mollywood proves the King once again 
  A very simple movie abt normal friends and normal love of a couple.
    <hr />
                </div>
                <button className='review__submit'>Submit Your Review</button>
              </div>
            </div>
            
        </div>
    </div>
  )
}
