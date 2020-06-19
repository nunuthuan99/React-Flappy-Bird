import React from 'react'

import FgImage from '../images/fg.png'

const ForeGround = () => {
    return (
        <div style = {{
            position: 'absolute',
            bottom: 0,
            width: 288,
            height: 108,
            background: `url(${FgImage})`,
        }}></div>
    )
}

export default ForeGround