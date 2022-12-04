import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../constants/axios'
import constants from '../../constants/constants'
import PopUp from '../PopUp/popUp'

function Banner() {
    const [movie, setMovie] = useState()
    const [movieUrl, setMovieUrl] = useState('')

    useEffect(() => {
        let store = window.localStorage.getItem('OLDMOVIE')
        let count = store
        axios.get(`/trending/all/week?api_key=${constants.API_KEY}&language=en-US`).then((data) => {
            setMovie(data.data.results[count])
        })
        if (store !== null && store < 10) {
            store = JSON.parse(store) + 1
            window.localStorage.setItem('OLDMOVIE', JSON.stringify(store))

        } else if (store !== null && store >= 10) {
            window.localStorage.setItem('OLDMOVIE', JSON.stringify(0))
        } else {
            window.localStorage.setItem('OLDMOVIE', JSON.stringify(0))
        }

    }, [])

    function handleMovie(Id) {
        axios.get(`/movie/${Id}/videos?api_key=${constants.API_KEY}&language=en-US`).then((data) => {
            if (data.data.results.length != 0) {
                setMovieUrl(data.data.results[0])
            } else {
                console.log("Trailer Not Found")
                setMovieUrl(null)
            }
        }).catch((err) => {
            console.log(err)
            setMovieUrl(null)
        })
    }
    return (

        <div>
            <div style={
                { backgroundImage: `url(${movie ? constants.imageUrl + movie.backdrop_path : ""})` }
            } className='banner'>
                <div className='content'>
                    <h1 className='title'>{movie ? movie.title : null}</h1>
                    <div className='buttons'>
                        <button onClick={() => {
                            handleMovie(movie.id)
                        }} className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : null}</h1>
                </div>
                <div className='fade_bottom'></div>
            </div>

            {movieUrl && <PopUp movieKey={movieUrl.key} setMovieUrl={setMovieUrl}/>}
        </div>
    )
}

export default Banner

export var ClosePopupBanner = (props)=>{
    if(props.myValue){
      props.setMovieUrl(null)
    }
  }
