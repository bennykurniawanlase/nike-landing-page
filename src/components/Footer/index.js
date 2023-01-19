import React from 'react'
import './footer.css'
import { GrPlayFill } from 'react-icons/gr'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-images-wrapper">
				<img
					className="products"
					src={require('../../Assets/adidas3.jpg')}
					alt=""
				/>
				<img
					className="products"
					src={require('../../Assets/adidas1.jpg')}
					alt=""
				/>
				<img
					className="products"
					src={require('../../Assets/nike3.jpg')}
					alt=""
				/>
			</div>
			<div className="footer-play-icon">
				<div className="play-logo">
					<GrPlayFill />
				</div>
				<div className="play-desc">Play</div>
			</div>
		</div>
	)
}

export default Footer
