import React from 'react'

const Locate = ({ panTo }) => {
    return (
        <button className='locate' onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                },
                () => null
            )
        }}>
            Locate User
        </button>
    )
}

export default Locate;