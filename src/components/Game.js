import React from 'react'

import Bird from './Bird'
import Pine from './Pipe'
import ForeGround from './ForeGround'

import BgImange from '../images/bg.png'

const Game = () => {
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

export default Game