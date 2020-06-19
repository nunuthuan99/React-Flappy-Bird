import React from 'react'

import Bird from './Bird'
import Pine from './Pipe'
import ForeGround from './ForeGround'

const Game = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 300,
                height: 500,
                backgroundColor: 'pink',
            }}
        >
        <Bird />
        <Pine />
        <ForeGround />

        </div>
    )
}

export default Game