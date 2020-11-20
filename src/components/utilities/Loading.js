import React, { Fragment } from 'react'
import loading from '../../assets/cheer.gif'

const Loading = () => {
    const loadingS = {
        width: '100%',
        heigh: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 'auto',
        backgroundColor: 'rgba(51, 63, 82, 1)',
        zIndex: '7',
        // padding: '20%'
        opacity: '0.8',
    }

    const imageS = {
        // height: '300px',
        // width: '300px',
        borderRadius: '50%'
    }

    return (
        <div className='loading' style={loadingS}>
            <img style={imageS} src={loading} alt='cheer!!' />
        </div>
    )
}

export default Loading
