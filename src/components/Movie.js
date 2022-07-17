import React from 'react'
import './movie.css'
import thallumala from "../asset/thallumala.jpg"

export default function Movie() {
  return (
    <div className='movie__page'>
        <div className='container'>
            <div className='img__box'>
                <img src={thallumala} alt="" />
            </div>
        </div>
    </div>
  )
}
