import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Movies = () => {
    const [title,setTitle]=useState('')
    const [movies,setMovies]=useState([])

let handleChange=(event)=>{
    setTitle(event.target.value)

}

let handleSubmit=async()=>{

    let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
    console.log(response.data.Search);
    setMovies(response.data.Search)
}

  return (
    <div>
        <input onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>search</button>
        <div>
            {movies.map((item,index)=>(
                <>
                <Link to={`/detail/${item.imdbID}`}><img src={item.Poster} alt="" /></Link>
                <h2>{item.imdbID}</h2>
                </>
            ))}
        </div>
    </div>
  )
}

export default Movies