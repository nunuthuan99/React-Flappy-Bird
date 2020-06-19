import React, { useEffect } from 'react'

import Bird from './Bird'
import Pine from './Pipe'
import ForeGround from './ForeGround'

import BgImange from '../images/bg.png'

const Game = () => {
    useEffect( () => {
        const handlePressAndClick = (e) => {
            if (e.keyCode === 32 || e.keyCode === 38 || (e.buttons % 2) === 0) { fly() } // 'space' button, 'top-arrow button and left click
        } 
        document.addEventListener('keydown', handlePressAndClick)
        document.addEventListener('click', handlePressAndClick)
    }, [] // do one time
    )

    return (
        <div
            style={{
                position: 'relative',
                width: 288,
                height: 512,
                background: `url(${BgImange})`,
            }}
        >
        <Bird />
        <Pine />
        <ForeGround />

        </div>
    )
}

const fly = () => { console.log("abc") }


export default Game