import React, { useEffect, useState } from 'react'
import axios from '../../constants/axios'
import constants from '../../constants/constants'
import './RowPost.css'
import PopUp from '../PopUp/popUp'

function RowPopst(props) {
  const [posters, setPoster] = useState([])
  const [movie, setMovie] = useState('')
  useEffect(() => {
    axios.get(props.link).then((movies) => {
      setPoster(movies.data.results)
    })
  }, [])


  function handleMovie(Id) {
    axios.get(`/movie/${Id}/videos?api_key=${constants.API_KEY}&language=en-US`).then((data) => {
      if (data.data.results.length != 0) {
        setMovie(data.data.results[0])
      } else {
        console.log("Trailer Not Found")
        setMovie(null)
      }
    }).catch((err) => {
      console.log(err)
      setMovie(null)
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          posters.map((data, index) => {
            return (
              <img key={index} onClick={()=>{
                handleMovie(data.id)
              }} className={props.isSmall ? 'posterSmall' : 'poster'} src={`${constants.imageUrl + data.backdrop_path}`} alt="poster" />
            )
          })
        }
      </div>
     {movie && <PopUp movieKey={movie.key} setMovie={setMovie}/>}
      
    </div>
  )
}

export default RowPopst

export var ClosePopup = (props)=>{
  if(props.myValue){
    props.setMovie(null)
  }
}