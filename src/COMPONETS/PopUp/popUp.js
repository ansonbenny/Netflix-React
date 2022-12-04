import React from 'react'
import './popUp.css'
import YouTube from 'react-youtube'
import {ClosePopup} from '../RowPost/RowPost';
import {ClosePopupBanner} from '../Banner/Banner'

function popUp(props) {
    document.body.addEventListener('click', closePopUpBody );
    function closePopUpBody(){
        if(props.setMovie){
            ClosePopup({myValue: true,setMovie:props.setMovie})
        }else{
            ClosePopupBanner({myValue: true,setMovieUrl:props.setMovieUrl})
        }
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div>
            <div className='popup'>
                <div className='popup_inner'>
                    {<YouTube videoId={props.movieKey} opts={opts} />}
                </div>
            </div>
        </div>
    )
}

export default popUp
