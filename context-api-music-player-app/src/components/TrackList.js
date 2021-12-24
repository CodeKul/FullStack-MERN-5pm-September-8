import React, { useContext } from 'react'
import { MusicPlayerContext } from './MusicPlayerContext'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons"
import useMusicPlayer from './useMusicPlayer'

export default function TrackList() {

    const {trackList, currentTrackName, playTrack, isPlaying} = useMusicPlayer()

    return (
        <div className="box">

            <h1>Track List</h1>
            {trackList.map((track, index) => {
                  console.log(index)
                return(


                    // conditional statements - if-else, switch , ternary
                   // ternay operator syntax - condition(true) ? statement1 : statement2
                    <div className="container">

                    <button
                    className="button"
                    onClick={() => playTrack(index)}>

                        {currentTrackName === track.name && isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}

                    </button>


                    <div className="song-title">
                        {track.name}
                    </div>

                </div>

                    
                )
                            })}
        </div>
    )
}
