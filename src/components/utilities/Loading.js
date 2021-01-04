import React from 'react'
import loading from '../../assets/cheer.gif'

const Loading = () => {
    const loadingStyling = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '7',
        opacity: '0.8',
    }

    const imageStyling = {
        height: '540px',
        width: '720px',
        borderRadius: '50%'
    }

    return (
        <div className='loading' style={loadingStyling}>
            <img style={imageStyling} src={loading} alt='cheer!!' />
        </div>
    )
}

export default Loading
