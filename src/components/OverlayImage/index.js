import React from 'react'
import './overlayImage.css'

const OverlayImage = () => {
	return (
		<img
			src={require('../../Assets/sepatu-sneakers.png')}
			alt="overlay"
			className="overlay-image"
		/>
	)
}

export default OverlayImage
