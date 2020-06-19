import React from 'react'

import BirdImage from '../images/bird.png'

const Bird = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top : 250,
                left: 150,
                width: 38,
                height: 26,
                background: `url(${BirdImage})`,
            }}
        >

        </div>
    )
}

export default Bird