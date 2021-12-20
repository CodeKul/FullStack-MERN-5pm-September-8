import React, { useContext } from 'react'
import { musicContextObject } from './MusicContext'

export default function TrackList() {
    const [musicdata, setMusicData] = useContext(musicContextObject);

    console.log(musicdata)
    return (
        <div>
            {musicdata.trackList.map((item)=>{
                return(

                <h1>{item.songName}</h1>
                )

            })}
        </div>
    )
}
