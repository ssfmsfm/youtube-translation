import React from 'react'
import './Iframe.css'

const Iframe = ({url}) => {

    return (
        <iframe
        className="fullScreen"
        autoplay="1"
        src={url}
        frameborder="0"
        seamless="seamless"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />
    )
}

export default Iframe
