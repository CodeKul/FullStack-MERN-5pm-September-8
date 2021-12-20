import React, { createContext, useState } from 'react'

import audio1 from "../assets/Audio1.mp3";
import audio2 from "../assets/Audio2.mp3";
import audio3 from "../assets/Audio3.mp3";
import audio4 from "../assets/Audio4.mp3";


export const musicContextObject = createContext();
export default function MusicContext(props) {
    const [musicdata, setMusicData] = useState({
        audioPlayer: new Audio(),

        trackList: [
            {
                songName: "Song One",
                audioFile: audio1
            },
            {
                songName: "Song Two",
                audioFile: audio2
            },
            {
                songName: "Song Three",
                audioFile: audio3
            },
            {
                songName: "Song Four",
                audioFile: audio4
            }
        ]
    }

    )
    return (
        <div>

            <musicContextObject.Provider value={[musicdata, setMusicData]}>
                {props.children}
            </musicContextObject.Provider>

        </div>
    )
}
