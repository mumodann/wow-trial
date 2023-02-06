import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>
        )}
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl0r7-jm1Y3IMdrYI-DJdGxS_NxuvrlSMEVXE925b6o9_Yuv72TeF01lBTv2JO2bJBrCEBuCBrdX-QW2a4lcW4SmAdrQI2iJrpYx3RTF_1dXlCLpQd2JHWBAmuFBxbwZ0Bi9c0d0dMFDmDAA43ejuxQb52CDWiHr9fd6rJF1jW2Ph5-BdsVNfcLn9FRw/s1600/IMG-20230129-WA0000.jpg" alt="" 
        />
        <div className="info">
            <img src="https://imgs.search.brave.com/Vz83SgzFkXzX8iFn8k9o9XikIIAtWLoGxGjoAoO-aVA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvd2l0Y2hlci93/aXRjaGVyX1BORzQ4/LnBuZw" alt="" 
            />

            <span className="desc">
                Kienyeji tells the love story between Cynthia Njambi and Charles Chieng, students from two of Kenya's opposing tribes.<br/>
                This against their parents wishes, <b>will their love win or not...</b>
            </span>

            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>

        </div>

    </div>
  )
}
