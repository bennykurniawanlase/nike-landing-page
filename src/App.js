import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainFold from './components/MainFold'
import OverlayImage from './components/OverlayImage'

const App = () => {
	return (
		<div className="app">
			<Header />
			<MainFold />
			<OverlayImage />
			<Footer />
		</div>
	)
}

export default App
