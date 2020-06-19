import React from 'react'

import TopPipeImage from '../images/pipe-top.png'
import BottomPipeImage from '../images/pipe-bottom.png'

const Pine = () => {
    return (
        <div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 150,
                width: 52,
                height: 200,
                background: `url(${TopPipeImage})`,
                backgroundPosition: 'bottom',
            }}></div>
            <div style={{
                position: 'absolute',
                top: 200 + 100,
                left: 150,
                width: 52,
                height: 200,
                background: `url(${BottomPipeImage})`,
            }}></div>
        </div>
    )
}


export default Pine 